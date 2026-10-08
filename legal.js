/* ====== Páginas legais — motor de legal.html (os textos ficam em legal-content.js) ======
   legal.html?doc=privacy | cookies | legal */
const DOCS = { privacy: "foot.privacy", cookies: "foot.cookies", legal: "foot.legal" };
// Dados da empresa ainda não preenchidos em CONFIG.company aparecem assim no texto
const MISSING = {
  legalName: "razão social", legalForm: "forma jurídica", address: "endereço da sede", bce: "nº de empresa BCE/KBO",
  vat: "nº de IVA", responsible: "responsável pela publicação", retentionText: "prazo de guarda dos dados"
};

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const waLink = msg => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const params = new URLSearchParams(location.search);
const doc = DOCS[params.get("doc")] ? params.get("doc") : "privacy";

let lang, L;
function storedLang(){ try { return localStorage.getItem("lang"); } catch { return null; } }

// Troca {chave} pelos dados de CONFIG; o que faltar vira um aviso [PREENCHER: ...] destacado
function fill(html){
  const c = CONFIG.company, G = LEGAL[lang];
  const loc = v => v && typeof v === "object" ? v[lang] : v;   // texto único ou um por idioma
  const values = {
    name: c.name, email: `<a href="mailto:${CONFIG.email}">${CONFIG.email}</a>`, phone: CONFIG.phoneLabel,
    legalName: c.legalName, legalForm: loc(c.legalForm), address: c.address, bce: c.bce, vat: loc(c.vat), responsible: c.responsible,
    retentionText: c.retentionMonths == null ? "" : c.retentionMonths === 0 ? G.keepNone : G.keepFor.replace("%n", c.retentionMonths),
    consentMonths: CONFIG.consent.months
  };
  return html.replace(/\{(\w+)\}/g, (m, k) => values[k] || `<mark>[PREENCHER: ${MISSING[k] || k}]</mark>`);
}

function setLang(l){
  lang = l; L = I18N[l];
  try { localStorage.setItem("lang", l); } catch {}
  const D = LEGAL[l][doc], name = L.t[DOCS[doc]];
  document.documentElement.lang = L.meta.locale;
  document.title = `${name} | Mancini Expat`;
  $$("[data-i18n]").forEach(el => { const v = L.t[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  $$("[data-lang]").forEach(a => a.classList.toggle("on", a.dataset.lang === l));
  $("#footWa").href = waLink(L.wa.hello);
  $("#legalTabs").innerHTML = Object.keys(DOCS).map(d => `<a href="legal.html?doc=${d}" class="${d === doc ? "on" : ""}">${L.t[DOCS[d]]}</a>`).join("");
  $("#legalTitle").textContent = name;
  $("#legalUpdated").textContent = `${L.t["legal.updated"]}: ${new Date(CONFIG.consent.policyDate + "T00:00:00Z").toLocaleDateString(L.meta.locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}`;
  $("#legalBody").innerHTML = fill(`<p>${D.intro}</p>` + D.sections.map(([h, body]) => `<h2>${h}</h2>${body}`).join(""));
  Consent.setLang(l);
}

$("#footMail").href = "mailto:" + CONFIG.email; $("#footMail").textContent = CONFIG.email;
$("#footTel").href = "tel:+" + CONFIG.whatsapp; $("#footTel").textContent = CONFIG.phoneLabel;
$("#year").textContent = new Date().getFullYear();
$("#menuBtn").onclick = () => $("#navLinks").classList.toggle("open");
$$("[data-lang]").forEach(a => a.onclick = e => {
  e.preventDefault(); setLang(a.dataset.lang);
  history.replaceState(null, "", `?doc=${doc}&lang=${a.dataset.lang}`);
});

setLang([params.get("lang"), storedLang(), CONFIG.defaultLang].find(l => l && I18N[l]));
