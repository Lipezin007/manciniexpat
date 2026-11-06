const ICONS = { traducao:"📄", interprete:"🗣️", acompanhamento:"🤝", consulta:"💬" };
const SITUATION_ICONS = { carta:"📬", medico:"🩺", traduzir:"📄", orgao:"🏛️", chegou:"🧳", reuniao:"💼" };

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
  renderHelper(); renderServices(); renderHow(); renderTips(); renderGuides(); renderForWho(); renderAreas(); renderPartners(); renderFaq(); renderPick();
  if (activeHelp) showHelp(activeHelp);
  if ($("#modal").classList.contains("open")) go(step);
  Consent.setLang(l);
}

/* ===== Seções dinâmicas ===== */
// Tradução é sob orçamento; os demais serviços são agendados
const serviceAction = (id, cls) => id === "traducao"
  ? `<a class="btn ${cls}" href="#orcamento">${L.t["q.submit"]}</a>`
  : `<button class="btn ${cls}" data-book="${id}">${L.t["btn.book"]}</button>`;

function renderHelper(){
  $("#helperOptions").innerHTML = L.situations.map(s =>
    `<button class="option${s.id === activeHelp ? " active" : ""}" data-help="${s.id}"><span class="ico">${SITUATION_ICONS[s.id]}</span><span>${s.text}</span></button>`).join("");
  $$("#helperOptions .option").forEach(b => b.onclick = () => {
    $$("#helperOptions .option").forEach(x => x.classList.remove("active")); b.classList.add("active");
    showHelp(b.dataset.help);
  });
}
function renderServices(){
  $("#servicesGrid").innerHTML = L.services.map(s => `
    <div class="service"><div class="svc-top"><div class="ico">${ICONS[s.id]}</div><span class="dur">${s.dur}</span></div>
    <h3>${s.title}</h3><p>${s.desc}</p>
    <ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul>
    ${serviceAction(s.id, "btn-ghost")}</div>`).join("");
}
function renderHow(){
  $("#howSteps").innerHTML = L.how.map(([t, p], i) =>
    `<div class="step"><div class="n">0${i + 1}</div><h3>${t}</h3><p>${p}</p></div>`).join("");
}
function renderTips(){
  $("#quoteTips").innerHTML = L.quoteTips.map(t => `<li>${t}</li>`).join("");
}
function renderGuides(){
  $("#guidesGrid").innerHTML = L.guides.map(g => `
    <details class="guide"><summary><span><span class="tag">${g.tag}</span><h3>${g.title}</h3></span></summary>
    <ul>${g.tips.map(t => `<li>${t}</li>`).join("")}</ul></details>`).join("");
}
function renderForWho(){
  $("#forWho").innerHTML = L.forWho.map(([t, p]) => `<div><b>${t}</b><span>${p}</span></div>`).join("");
}
function renderPartners(){
  $("#partnersList").innerHTML = CONFIG.partners.map(p => { const x = L.partners[p.id]; return `
    <article class="partner">
      <div class="partner-logo${p.logo ? " has-img" : ""}">${p.logo ? `<img src="${p.logo}" alt="${p.name}" loading="lazy">` : `<span>${p.name}</span>`}</div>
      <div class="partner-body"><h3>${x.title}</h3><p>${x.text}</p></div>
      <a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">${x.cta} ↗</a>
    </article>`; }).join("");
}
function renderFaq(){
  $("#faqList").innerHTML = L.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
}
function renderPick(){
  $("#pickService").innerHTML = L.services.map(s => `
    <button class="option" data-svc="${s.id}"><div><b>${ICONS[s.id]} ${s.title}</b><small>${s.desc}</small></div><span class="dur">${s.dur}</span></button>`).join("");
  $$("#pickService .option").forEach(b => b.onclick = () => { booking.service = b.dataset.svc; go(3); });
}

/* ===== Locais onde já atendemos (mapa) =====
   Leaflet (vendor/leaflet) e os contornos da Bélgica (map-data.js) ficam no próprio site e só são baixados quando a
   seção se aproxima da tela. Não há mapa de terceiros: nenhum dado do visitante sai do site, então não precisa de consentimento. */
const areaName = a => typeof a.name === "object" ? a.name[lang] : a.name;
const areaMarkers = {};
let areaMap = null;
function renderAreas(){
  $("#areaList").innerHTML = CONFIG.serviceAreas.map(a => `<li><button type="button" data-area="${a.id}">${areaName(a)}</button></li>`).join("");
  $$("#areaList [data-area]").forEach(b => b.onclick = () => focusArea(b.dataset.area));
  $("#areasMap").setAttribute("aria-label", L.t["map.aria"]);
  if (areaMap) $("#mapHint").textContent = L.t[matchMedia("(pointer: coarse)").matches ? "map.hintTouch" : "map.hint"];
  CONFIG.serviceAreas.forEach(a => { const m = areaMarkers[a.id]; if (m) { m.setTooltipContent(areaName(a)); m.getElement().setAttribute("aria-label", areaName(a)); } });
}
function focusArea(id){
  const m = areaMarkers[id]; if (!m) return;
  areaMap.flyTo(m.getLatLng(), Math.max(areaMap.getZoom(), 10.5), { duration: .7 });
  areaMap.once("moveend", () => m.openTooltip());
}
// Carrega os arquivos do mapa com a mesma versão (?v=) desta página, para o cache se renovar junto
const assetV = (document.querySelector('script[src*="app.js"]').getAttribute("src").split("?")[1] || "");
const loadAsset = (tag, url) => new Promise((ok, fail) => {
  const el = document.createElement(tag);
  if (tag === "link") { el.rel = "stylesheet"; el.href = url + "?" + assetV; } else { el.src = url + "?" + assetV; }
  el.onload = ok; el.onerror = fail; document.head.appendChild(el);
});
function buildAreaMap(){
  const el = $("#areasMap"), touch = matchMedia("(pointer: coarse)").matches;
  // No celular, um dedo continua rolando a página; o mapa se move e aproxima com dois dedos
  const map = areaMap = window.L.map(el, { attributionControl: false, scrollWheelZoom: false, dragging: !touch, minZoom: 6.5, maxZoom: 12, zoomSnap: .25,
    maxBounds: [[49.3, 1.9], [51.9, 7.1]], maxBoundsViscosity: .8 });
  // A vista precisa existir antes das camadas: sem ela o Leaflet adia os marcadores e getElement() vem vazio
  map.fitBounds(window.L.geoJSON(MAP_DATA.border).getBounds(), { padding: [14, 14] });   // abre mostrando a Bélgica inteira
  // De longe os marcadores ficam menores, para as cidades próximas (Bruxelas, Vilvoorde) não se sobreporem
  const farClass = () => el.classList.toggle("far", map.getZoom() < 8.5);
  map.on("zoomend", farClass); farClass();
  // A roda do mouse só dá zoom depois de um clique no mapa; ao sair com o mouse, volta a rolar a página
  el.addEventListener("pointerdown", () => map.scrollWheelZoom.enable()); el.addEventListener("mouseleave", () => map.scrollWheelZoom.disable());
  const shape = (data, style) => window.L.geoJSON(data, { style, interactive: false }).addTo(map);
  shape(MAP_DATA.around, { color: "#E0D9CC", weight: 1, fillColor: "#EFEAE1", fillOpacity: 1 });
  shape(MAP_DATA.provinces, { color: "rgba(255,255,255,.22)", weight: 1, fillColor: "#1B3B5C", fillOpacity: 1 });
  shape(MAP_DATA.border, { color: "#0F2A44", weight: 1.5, fill: false });
  const icon = window.L.divIcon({ className: "area-pin", html: "<span></span>", iconSize: [22, 22], iconAnchor: [11, 11] });
  CONFIG.serviceAreas.forEach((a, i) => {
    const m = areaMarkers[a.id] = window.L.marker([a.lat, a.lng], { icon, riseOnHover: true }).addTo(map)
      .bindTooltip(areaName(a), { direction: "top", offset: [0, -10], className: "area-tip" });
    const pin = m.getElement();
    pin.style.setProperty("--d", 250 + i * 90 + "ms");   // entrada em sequência
    pin.addEventListener("focus", () => m.openTooltip()); pin.addEventListener("blur", () => m.closeTooltip());
  });
  el.classList.add("ready");
  renderAreas();
}
(function initAreas(){
  const box = $("#areas");
  const load = () => Promise.all([loadAsset("link", "vendor/leaflet/leaflet.css"), loadAsset("script", "vendor/leaflet/leaflet.js"), loadAsset("script", "map-data.js")])
    .then(buildAreaMap).catch(e => { console.warn("Mapa indisponível:", e); $("#areasMap").classList.add("failed"); });   // sem mapa, a lista de cidades continua lá
  if (!("IntersectionObserver" in window)) { box.classList.add("in"); load(); return; }
  new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { o.disconnect(); load(); } }, { rootMargin: "400px 0px" }).observe(box);
  new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { o.disconnect(); box.classList.add("in"); } }, { threshold: .25 }).observe(box);
})();

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

/* ===== Assistente: situação → serviço recomendado ===== */
let activeHelp = null;
function showHelp(id){
  activeHelp = id;
  const s = L.situations.find(x => x.id === id);
  $("#helperTitle").textContent = svc(s.svc).title;
  $("#helperText").textContent = s.advice;
  $("#helperAction").innerHTML = serviceAction(s.svc, "btn-gold");
  $("#helperResult").classList.add("show");
}

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
let step = 1;

function go(n){
  step = n;
  $$(".pane").forEach(p => p.classList.toggle("active", +p.dataset.pane === n));
  $$("#progress i").forEach((i, k) => i.classList.toggle("on", k < (n > 2 ? n - 1 : n)));
  $("#stepLabel").textContent = L.steps[n];
  $("#modalTitle").textContent = L.titles[n];
  $("#modalTitle").parentElement.style.display = n === 5 ? "none" : "";
  $("#modalFoot").style.display = (n === 1 || n === 5) ? "none" : "flex";
  if (n === 3) renderCal();
  if (n === 4) $("#summary").innerHTML = summaryHTML();
  if (n === 5) $("#summaryFinal").innerHTML = summaryHTML();
}
$("#backBtn").onclick = () => go(step === 3 ? 1 : step - 1);

/* Datas e horas são sempre as de Bruxelas, guardadas como texto ("2026-10-07" e "09:30"),
   para o calendário não mudar conforme o fuso de quem visita o site. */
const TZ = "Europe/Brussels";
const pad = n => String(n).padStart(2, "0");
const keyOf = d => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
const dateOf = key => new Date(key + "T00:00:00Z");
const addDays = (key, n) => { const d = dateOf(key); d.setUTCDate(d.getUTCDate() + n); return keyOf(d); };
const shiftMonth = (ym, n) => { const [y, m] = ym.split("-").map(Number); return keyOf(new Date(Date.UTC(y, m - 1 + n, 1))).slice(0, 7); };
function todayKey(){
  const p = {};
  new Intl.DateTimeFormat("en", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).formatToParts(new Date()).forEach(x => p[x.type] = x.value);
  return `${p.year}-${p.month}-${p.day}`;
}
const fmt = (key, opts) => dateOf(key).toLocaleDateString(L.meta.locale, { ...opts, timeZone: "UTC" });
const fmtDate = key => fmt(key, { weekday: "long", day: "numeric", month: "long" });

/* Horários ocupados: vêm da Google Agenda do cliente (google-apps-script/disponibilidade.gs), só início e fim.
   Sem URL ou com erro, tudo aparece como disponível: o agendamento nunca trava por causa disso.
   O script do Google às vezes demora: a tela espera só CONFIG.availabilityWait; depois mostra tudo livre
   e, quando a resposta chega, o calendário é corrigido (refreshBooking). */
let busy = [], busyAt = 0, busyLoading = false, busyWait = false, slotTaken = false;
async function loadBusy(){
  if (!CONFIG.availabilityUrl || busyLoading || Date.now() - busyAt < 5 * 60000) return;
  busyLoading = busyWait = true;
  const ctl = new AbortController(), timer = setTimeout(() => ctl.abort(), 45000);
  const waitTimer = setTimeout(() => { busyWait = false; refreshBooking(); }, CONFIG.availabilityWait);
  try {
    const r = await fetch(CONFIG.availabilityUrl, { signal: ctl.signal, credentials: "omit" });
    const list = (await r.json()).busy;
    if (!Array.isArray(list)) throw new Error("resposta inesperada");
    busy = list.filter(b => b && typeof b.start === "string" && typeof b.end === "string");
    busyAt = Date.now();
  } catch { busy = []; }
  clearTimeout(timer); clearTimeout(waitTimer); busyLoading = busyWait = false;
  refreshBooking();
}
// Atualiza o que estiver na tela; se a pessoa já escolheu um horário que na verdade está ocupado, volta para a escolha
function refreshBooking(){
  if (!$("#modal").classList.contains("open")) return;
  if (step === 3) renderCal();
  else if (step === 4 && isBusy(booking.date, booking.time)) { slotTaken = true; go(3); }
}
const slotEnd = h => { const [H, M] = h.split(":").map(Number), m = H * 60 + M + CONFIG.slotMinutes; return pad(Math.floor(m / 60)) + ":" + pad(m % 60); };
const isBusy = (key, h) => busy.some(b => b.start < `${key}T${slotEnd(h)}` && b.end > `${key}T${h}`);

let range, view;   // range: primeira e última data agendável · view: mês visível ("2026-10")
// Dia agendável: dentro do limite, dia útil e com pelo menos um horário livre (evento de dia inteiro ocupa todos)
const isOpen = key => key >= range.min && key <= range.max && CONFIG.workDays.includes(dateOf(key).getUTCDay()) && CONFIG.hours.some(h => !isBusy(key, h));

function renderCal(){
  const today = todayKey();
  range = { min: addDays(today, 1), max: addDays(today, CONFIG.daysAhead) };
  if (!busyWait && !(booking.date && isOpen(booking.date))) {
    booking.date = null; view = null;
    for (let k = range.min; k <= range.max; k = addDays(k, 1)) if (isOpen(k)) { booking.date = k; break; }
  }
  if (!view) view = (booking.date || range.min).slice(0, 7);
  const [y, m] = view.split("-").map(Number);
  const lead = (new Date(Date.UTC(y, m - 1, 1)).getUTCDay() + 6) % 7;   // a semana começa na segunda
  const total = new Date(Date.UTC(y, m, 0)).getUTCDate();
  const week = [1, 2, 3, 4, 5, 6, 7].map(d => fmt("2024-01-0" + d, { weekday: "short" }).replace(".", ""));   // 01/01/2024 foi segunda
  const cells = Array.from({ length: total }, (_, i) => { const key = `${view}-${pad(i + 1)}`;
    return `<button class="cal-day${key === booking.date ? " active" : ""}" data-key="${key}" aria-label="${fmt(key, { day: "numeric", month: "long" })}" ${!busyWait && isOpen(key) ? "" : "disabled"}>${i + 1}</button>`; }).join("");
  $("#cal").innerHTML = `
    <div class="cal-head">
      <button class="cal-nav" data-nav="-1" aria-label="${L.t["cal.prev"]}" ${view <= range.min.slice(0, 7) ? "disabled" : ""}>‹</button>
      <b class="cal-title">${fmt(view + "-01", { month: "long", year: "numeric" })}</b>
      <button class="cal-nav" data-nav="1" aria-label="${L.t["cal.next"]}" ${view >= range.max.slice(0, 7) ? "disabled" : ""}>›</button>
    </div>
    <div class="cal-grid">${week.map(w => `<span class="cal-wd">${w}</span>`).join("")}${"<span></span>".repeat(lead)}${cells}</div>`;
  $$("#cal .cal-nav").forEach(b => b.onclick = () => { view = shiftMonth(view, +b.dataset.nav); renderCal(); });
  $$("#cal .cal-day").forEach(b => b.onclick = () => { booking.date = b.dataset.key; slotTaken = false; renderCal(); });
  renderSlots();
}
function renderSlots(){
  $("#slotsHead").textContent = !busyWait && booking.date ? fmtDate(booking.date) : "";
  if (busyWait || !booking.date) { $("#slots").innerHTML = `<p class="cal-msg${busyWait ? " loading" : ""}">${L.t[busyWait ? "cal.loading" : "cal.none"]}</p>`; return; }
  $("#slots").innerHTML = (slotTaken ? `<p class="cal-msg taken">${L.t["cal.taken"]}</p>` : "") + CONFIG.hours.map(h => `<button class="slot" ${isBusy(booking.date, h) ? "disabled" : ""}>${h}</button>`).join("");
  $$("#slots .slot").forEach(b => b.onclick = () => { booking.time = b.textContent; slotTaken = false; go(4); });
}
function summaryHTML(){
  const s = L.sum;
  return `<div><span>${s.service}</span><b>${svc(booking.service).title}</b></div>
    <div><span>${s.date}</span><b>${fmtDate(booking.date)}</b></div>
    <div><span>${s.time}</span><b>${booking.time}</b></div>`;
}
$("#bookForm").onsubmit = e => {
  e.preventDefault(); const d = Object.fromEntries(new FormData(e.target)); const w = L.wa, s = L.sum;
  const msg = `${w.book}\n\n${s.service}: ${svc(booking.service).title}\n${s.date}: ${fmtDate(booking.date)}\n${s.time}: ${booking.time}\n\n${w.name}: ${d.nome}\n${w.phone}: ${d.tel}\n${w.email}: ${d.email}\n${w.notes}: ${d.obs || "—"}`;
  go(5);
  window.open(waLink(msg), "_blank");
};

function openBooking(svcId){
  $("#bookForm").reset(); booking.date = booking.time = null; view = null; slotTaken = false;
  loadBusy();
  $("#modal").classList.add("open"); document.body.style.overflow = "hidden";
  if (svcId) { booking.service = svcId; go(3); } else go(1);
}
function closeBooking(){ $("#modal").classList.remove("open"); document.body.style.overflow = ""; }
document.addEventListener("click", e => { const b = e.target.closest("[data-book]"); if (b) openBooking(b.dataset.book || null); });
$("#closeModal").onclick = closeBooking; $("#doneBtn").onclick = closeBooking;
$("#modal").onclick = e => { if (e.target.id === "modal") closeBooking(); };
document.addEventListener("keydown", e => { if (e.key === "Escape") closeBooking(); });

setLang(pickLang());

/* Links vindos de outra página (ex.: curso.html → index.html#chegando).
   O navegador pula para a seção antes de o JS preencher o conteúdo acima dela, então rolamos de novo. */
if (location.hash === "#agendar") { history.replaceState(null, "", location.pathname + location.search); openBooking(null); }
else if (location.hash.length > 1) { const target = document.getElementById(location.hash.slice(1)); if (target) target.scrollIntoView({ behavior: "instant" }); }
