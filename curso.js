/* ====== Aula grátis de holandês — motor da página (os textos ficam em curso-aulaN.js) ====== */
const STORE_KEY = "mx-curso-progresso";
const WA_MSG = {
  help: "Olá! Vim pela aula grátis de holandês e gostaria de ajuda da Mancini Expat.",
  notify: "Olá! Fiz a aula grátis de holandês e quero ser avisado quando o curso completo lançar."
};

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ===== Progresso (localStorage) ===== */
function loadProgress(){ try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; } }
function saveProgress(id, data){
  const p = loadProgress(); p[id] = data;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch {}
}

/* ===== Aula atual ===== */
const AULAS_OK = (window.AULAS || []).slice().sort((a, b) => a.id - b.id);
const wanted = +new URLSearchParams(location.search).get("aula");
const aula = AULAS_OK.find(a => a.id === wanted) || AULAS_OK[0];

/* ===== Áudio (Web Speech API) ===== */
let voice = null, slow = false;
function pickVoice(){
  if (!("speechSynthesis" in window)) return null;
  const vs = speechSynthesis.getVoices();
  const norm = v => v.lang.replace("_", "-").toLowerCase();
  return vs.find(v => norm(v) === "nl-be") || vs.find(v => norm(v) === "nl-nl") || vs.find(v => norm(v).startsWith("nl")) || null;
}
function initVoice(){
  const done = () => {
    voice = pickVoice();
    document.body.classList.toggle("tts-ok", !!voice);
    $("#slowBtn").hidden = !voice;
    return !!voice;
  };
  if (done()) return;
  if ("speechSynthesis" in window) speechSynthesis.addEventListener("voiceschanged", done);
  // As vozes podem demorar a carregar; se ainda não houver voz holandesa, mostra o aviso
  setTimeout(() => { if (!done()) $("#ttsNote").hidden = false; }, 2500);
}
function speak(text, btn){
  if (!voice) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.voice = voice; u.lang = voice.lang; u.rate = slow ? 0.6 : 0.9;
  $$(".play.on").forEach(b => b.classList.remove("on"));
  if (btn) { btn.classList.add("on"); u.onend = u.onerror = () => btn.classList.remove("on"); }
  speechSynthesis.speak(u);
}
const playBtn = (text, label) => `<button class="play" data-say="${esc(text)}" aria-label="Ouvir: ${esc(label || text)}">▶</button>`;

/* ===== Render ===== */
function renderHeader(){
  document.title = `Aula ${aula.id}: ${aula.title} — Aula grátis de holandês | Mancini Expat`;
  if (aula.id === AULAS_OK[0].id) document.title = "Aula grátis de holandês para brasileiros na Bélgica | Mancini Expat";
  $("#lessonTitle").innerHTML = `Holandês de sobrevivência na Bélgica <em>— Aula ${aula.id}: ${aula.title}</em>`;
  $("#lessonSub").textContent = aula.subtitle;
  renderMeta();
  $("#lessonIntro").innerHTML = `<span class="ico">💡</span><p>${aula.intro}</p>`;
  if (aula.video) {
    $("#videoFrame").src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(aula.video)}`;
    $("#videoBlock").hidden = false;
  }
  renderTabs();
}
// Abas só aparecem quando existir mais de uma aula
function renderTabs(){
  const prog = loadProgress();
  $("#lessonTabs").hidden = AULAS_OK.length < 2;
  $("#lessonTabs").innerHTML = AULAS_OK.map(a => `<a href="?aula=${a.id}" class="${a.id === aula.id ? "on" : ""}">${prog[a.id]?.done ? "✓ " : ""}Aula ${a.id} · ${esc(a.title)}</a>`).join("");
}
function renderMeta(){
  const p = loadProgress()[aula.id];
  $("#lessonMeta").innerHTML = `<span>⏱ ${aula.duration}</span><span>🔊 Com áudio</span><span>✏️ Quiz de ${aula.quiz.length} perguntas</span>` +
    (p?.done ? `<span class="done">✓ Aula concluída · ${p.score}/${p.total}</span>` : "");
}
function renderPronunciation(){
  const P = aula.pronunciation;
  $("#pronTitle").textContent = P.title; $("#pronLead").textContent = P.lead;
  $("#pronGrid").innerHTML = P.items.map((it, i) => `
    <div class="course-card pron">
      <div class="pron-head"><span class="num">${i + 1}</span><b>${it.sound}</b></div>
      <p>${it.desc}</p>
      <ul>${it.examples.map(e => `<li>${playBtn(e.nl)}<div><span class="nl">${e.nl}</span> <span class="pr">“${e.pron}”</span><span class="pt">${e.pt}</span></div></li>`).join("")}</ul>
    </div>`).join("");
}
function renderPhrases(){
  const F = aula.phrases;
  $("#phrTitle").textContent = F.title; $("#phrLead").textContent = F.lead;
  $("#phraseGrid").innerHTML = F.items.map(f => `
    <div class="course-card phrase">
      <div class="phrase-top"><div class="nl">${f.nl}</div>${playBtn(f.say || f.nl, f.nl)}</div>
      <div class="pr">“${f.pron}”</div>
      <div class="pt">${f.pt}</div>
      ${f.note ? `<p class="note">${f.note}</p>` : ""}
    </div>`).join("");
}

/* ===== Quiz ===== */
let qi = 0, score = 0;
function renderQuiz(){
  const Q = aula.quiz, box = $("#quizBox");
  if (qi >= Q.length) {
    const total = Q.length;
    saveProgress(aula.id, { done: true, score, total, at: new Date().toISOString() });
    renderMeta(); renderTabs();
    const msg = score === total ? "Perfeito! Você está pronto para o seu primeiro “Dag!” 🎉"
      : score >= total - 2 ? "Muito bem! Revise as frases em que errou e tente de novo."
      : "Bom começo! Ouça as frases mais uma vez e refaça o quiz.";
    box.innerHTML = `<div class="quiz-end">
      <div class="score">${score}<small>/${total}</small></div>
      <p><b>Aula ${aula.id} concluída!</b> ${msg}</p>
      <button class="btn btn-ghost" id="retryBtn">↻ Refazer o quiz</button></div>`;
    $("#retryBtn").onclick = () => { qi = 0; score = 0; renderQuiz(); };
    return;
  }
  const q = Q[qi];
  box.innerHTML = `
    <div class="quiz-top"><span>Pergunta ${qi + 1} de ${Q.length}</span><span>Acertos: ${score}</span></div>
    <div class="progress"><i style="flex:${qi}" class="on"></i><i style="flex:${Q.length - qi}"></i></div>
    <h3>${q.q}</h3>
    <div class="quiz-opts">${q.options.map((o, i) => `<button class="option" data-i="${i}">${o}</button>`).join("")}</div>
    <div class="quiz-fb" id="quizFb" aria-live="polite"></div>`;
  $$(".quiz-opts .option").forEach(b => b.onclick = () => {
    const i = +b.dataset.i, ok = i === q.answer;
    if (ok) score++;
    $$(".quiz-opts .option").forEach((x, k) => {
      x.disabled = true;
      if (k === q.answer) x.classList.add("right"); else if (k === i) x.classList.add("wrong");
    });
    $("#quizFb").innerHTML = `<p class="${ok ? "ok" : "ko"}"><b>${ok ? "✓ Certo!" : "✗ Não foi dessa vez."}</b> ${q.explain}</p>
      <button class="btn btn-primary" id="nextBtn">${qi + 1 < Q.length ? "Próxima →" : "Ver resultado"}</button>`;
    $(".quiz-top span:last-child").textContent = `Acertos: ${score}`;
    $("#nextBtn").onclick = () => { qi++; renderQuiz(); $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" }); };
    $("#nextBtn").focus({ preventScroll: true });
  });
}

/* ===== Contato / menu ===== */
$("#footMail").href = "mailto:" + CONFIG.email; $("#footMail").textContent = CONFIG.email;
$("#footTel").href = "tel:+" + CONFIG.whatsapp; $("#footTel").textContent = CONFIG.phoneLabel;
$("#year").textContent = new Date().getFullYear();
$$("#waFloat,#ctaWa,#footWa").forEach(a => a.href = waLink(WA_MSG.help));
$("#notifyBtn").href = waLink(WA_MSG.notify);
$("#menuBtn").onclick = () => $("#navLinks").classList.toggle("open");

document.addEventListener("click", e => {
  const b = e.target.closest(".play"); if (b) speak(b.dataset.say, b);
});
$("#slowBtn").onclick = () => {
  slow = !slow; $("#slowBtn").setAttribute("aria-pressed", slow);
  $("#slowBtn").classList.toggle("on", slow);
};

if (aula) {
  renderHeader(); renderPronunciation(); renderPhrases(); renderQuiz(); initVoice();
}
