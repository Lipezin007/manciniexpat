/* ====== CONFIGURAÇÃO — edite aqui ====== */
const CONFIG = {
  whatsapp: "32456321427",            // número com DDI, só dígitos
  phoneLabel: "+32 456 32 14 27",
  email: "manciniexpatservices@gmail.com",
  hours: ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30"],
  workDays: [1,2,3,4,5],              // 0=dom ... 6=sáb
  daysAhead: 14,
  defaultLang: "pt"
};

const ICONS = { traducao:"📄", interprete:"🗣️", acompanhamento:"🤝", admin:"🗂️", recem:"🏡", consulta:"💬" };
const HELP_TO_SERVICE = { traducao:"traducao", admin:"consulta", interprete:"interprete", acompanhamento:"acompanhamento", consulta:"consulta" };

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ===== Idioma ===== */
let lang, L;
function storedLang(){ try { return localStorage.getItem("lang"); } catch { return null; } }
function pickLang(){
  const q = new URLSearchParams(location.search).get("lang");
  return [q, storedLang(), CONFIG.defaultLang].find(l => l && I18N[l]);
}
const svc = id => L.services.find(s => s.id === id);

function setLang(l){
  lang = l; L = I18N[l];
  try { localStorage.setItem("lang", l); } catch {}
  document.documentElement.lang = L.meta.locale;
  document.title = L.meta.title;
  document.querySelector('meta[name="description"]').content = L.meta.desc;
  $$("[data-i18n]").forEach(el => { const v = L.t[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  $$("[data-lang]").forEach(a => a.classList.toggle("on", a.dataset.lang === l));
  $$("#waFloat,#ctaWa,#footWa").forEach(a => a.href = waLink(L.wa.hello));
  renderServices(); renderGuides(); renderFaq(); renderPick();
  if (activeHelp) showHelp(activeHelp);
  if ($("#modal").classList.contains("open")) go(step);
}

/* ===== Seções dinâmicas ===== */
function renderServices(){
  $("#servicesGrid").innerHTML = L.services.map(s => `
    <div class="service"><div class="ico">${ICONS[s.id]}</div><h3>${s.title}</h3><p>${s.desc}</p>
    <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
    <button class="btn btn-ghost" data-book="${s.id}">${L.t["btn.book"]}</button></div>`).join("");
}
function renderGuides(){
  $("#guidesGrid").innerHTML = L.guides.map(([tag, t, p]) =>
    `<a class="guide" href="#"><span class="tag">${tag}</span><h3>${t}</h3><p>${p}</p></a>`).join("");
}
function renderFaq(){
  $("#faqList").innerHTML = L.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
}
function renderPick(){
  $("#pickService").innerHTML = L.services.map(s => `
    <button class="option" data-svc="${s.id}"><div><b>${ICONS[s.id]} ${s.title}</b><small>${s.desc}</small></div><span class="dur">${s.dur}</span></button>`).join("");
  $$("#pickService .option").forEach(b => b.onclick = () => { booking.service = b.dataset.svc; go(3); });
}

/* ===== Contato / menu ===== */
$("#footMail").href = "mailto:" + CONFIG.email; $("#footMail").textContent = CONFIG.email;
$("#footTel").href = "tel:+" + CONFIG.whatsapp; $("#footTel").textContent = CONFIG.phoneLabel;
$("#year").textContent = new Date().getFullYear();
$("#menuBtn").onclick = () => $("#navLinks").classList.toggle("open");
$$("#navLinks a[href]").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));
$$("[data-lang]").forEach(a => a.onclick = e => {
  e.preventDefault(); setLang(a.dataset.lang);
  history.replaceState(null, "", "?lang=" + a.dataset.lang + location.hash);
});

/* ===== Assistente ===== */
let activeHelp = null;
function showHelp(key){
  activeHelp = key;
  $("#helperTitle").textContent = svc(HELP_TO_SERVICE[key]).title;
  $("#helperText").textContent = L.help[key];
  $("#helperResult").classList.add("show");
}
$$("#helperOptions .option").forEach(b => b.onclick = () => {
  $$("#helperOptions .option").forEach(x => x.classList.remove("active")); b.classList.add("active");
  showHelp(b.dataset.help);
});
$("#helperBtn").onclick = () => openBooking(HELP_TO_SERVICE[activeHelp]);

/* ===== Orçamento ===== */
$("#fileInput").onchange = e => $("#fileList").textContent = [...e.target.files].map(f => "📄 " + f.name).join("  ·  ");
$("#quoteForm").onsubmit = e => {
  e.preventDefault(); const d = Object.fromEntries(new FormData(e.target)); const w = L.wa;
  const files = [...$("#fileInput").files].map(f => f.name).join(", ") || "—";
  const msg = `${w.quote}\n\n${w.name}: ${d.nome}\n${w.phone}: ${d.tel}\n${w.email}: ${d.email}\n${w.doc}: ${d.doc}\n${w.lang}: ${d.idioma}\n${w.urg}: ${d.urgencia}\n${w.files}: ${files}\n${w.notes}: ${d.obs || "—"}\n\n${w.sendFiles}`;
  window.open(waLink(msg), "_blank");
};

/* ===== Agendamento ===== */
const booking = {};
let step = 1, days = [];

function go(n){
  step = n;
  $$(".pane").forEach(p => p.classList.toggle("active", +p.dataset.pane === n));
  $$("#progress i").forEach((i, k) => i.classList.toggle("on", k < (n > 2 ? n - 1 : n)));
  $("#stepLabel").textContent = L.steps[n];
  $("#modalTitle").textContent = L.titles[n];
  $("#modalTitle").parentElement.style.display = n === 5 ? "none" : "";
  $("#modalFoot").style.display = (n === 1 || n === 5) ? "none" : "flex";
  if (n === 3) renderDays();
  if (n === 4) $("#summary").innerHTML = summaryHTML();
  if (n === 5) $("#summaryFinal").innerHTML = summaryHTML();
}
$("#backBtn").onclick = () => go(step === 3 ? 1 : step - 1);

function renderDays(){
  days = []; const d = new Date(); d.setHours(0, 0, 0, 0);
  while (days.length < CONFIG.daysAhead) { d.setDate(d.getDate() + 1); if (CONFIG.workDays.includes(d.getDay())) days.push(new Date(d)); }
  const loc = L.meta.locale;
  $("#days").innerHTML = days.map((x, i) => `<button class="day" data-i="${i}"><small>${x.toLocaleDateString(loc, { weekday: "short" }).replace(".", "")}</small><b>${x.getDate()}</b><small>${x.toLocaleDateString(loc, { month: "short" }).replace(".", "")}</small></button>`).join("");
  $$("#days .day").forEach(b => b.onclick = () => {
    $$("#days .day").forEach(x => x.classList.remove("active")); b.classList.add("active");
    booking.date = days[+b.dataset.i]; renderSlots();
  });
  const i = booking.date ? Math.max(0, days.findIndex(x => +x === +booking.date)) : 0;
  $$("#days .day")[i].click();
}
function renderSlots(){
  // TODO: substituir por disponibilidade real (Google Calendar / Cal.com)
  const seed = booking.date.getDate();
  $("#slots").innerHTML = CONFIG.hours.map((h, i) => `<button class="slot" ${((i * 7 + seed) % 5 === 0) ? "disabled" : ""}>${h}</button>`).join("");
  $$("#slots .slot").forEach(b => b.onclick = () => { booking.time = b.textContent; go(4); });
}
const fmtDate = d => d.toLocaleDateString(L.meta.locale, { weekday: "long", day: "numeric", month: "long" });
const modeLabel = () => L.t["m.pres"];
function summaryHTML(){
  const s = L.sum;
  return `<div><span>${s.service}</span><b>${svc(booking.service).title}</b></div>
    <div><span>${s.mode}</span><b>${modeLabel()}</b></div>
    <div><span>${s.date}</span><b>${fmtDate(booking.date)}</b></div>
    <div><span>${s.time}</span><b>${booking.time}</b></div>`;
}
$("#bookForm").onsubmit = e => {
  e.preventDefault(); const d = Object.fromEntries(new FormData(e.target)); const w = L.wa, s = L.sum;
  const msg = `${w.book}\n\n${s.service}: ${svc(booking.service).title}\n${s.mode}: ${modeLabel()}\n${s.date}: ${fmtDate(booking.date)}\n${s.time}: ${booking.time}\n\n${w.name}: ${d.nome}\n${w.phone}: ${d.tel}\n${w.email}: ${d.email}\n${w.notes}: ${d.obs || "—"}`;
  go(5);
  window.open(waLink(msg), "_blank");
};

function openBooking(svcId){
  $("#bookForm").reset(); booking.date = null;
  $("#modal").classList.add("open"); document.body.style.overflow = "hidden";
  if (svcId) { booking.service = svcId; go(3); } else go(1);
}
function closeBooking(){ $("#modal").classList.remove("open"); document.body.style.overflow = ""; }
document.addEventListener("click", e => { const b = e.target.closest("[data-book]"); if (b) openBooking(b.dataset.book || null); });
$("#closeModal").onclick = closeBooking; $("#doneBtn").onclick = closeBooking;
$("#modal").onclick = e => { if (e.target.id === "modal") closeBooking(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeBooking(); });

setLang(pickLang());
