/* ====== Consentimento de cookies (RGPD / ePrivacy) — JS puro, usado em todas as páginas ======
   Textos: I18N[idioma].consent (i18n.js) · Categorias, versão e validade: CONFIG.consent (config.js)

   Como usar nas outras partes do site:
     Consent.has("media")        → true se a pessoa aceitou a categoria
     Consent.onChange(fn)        → avisa quando a escolha muda (aceitar, recusar ou retirar)
     Consent.grant("media")      → aceita uma categoria só (ex.: botão no lugar do vídeo)
     Consent.open()              → abre as preferências (link do rodapé: data-cookie-prefs)
     Consent.setLang("fr")       → idioma do banner; a primeira chamada mostra o banner se ainda não houver escolha

   Nada não essencial pode ser carregado sem Consent.has(...) === true. */
const Consent = (() => {
  const KEY = "mx-consent";
  const cfg = CONFIG.consent;
  const listeners = [];
  let lang = null, state = read(), banner = null, modal = null;

  // A escolha vale enquanto a versão da política for a mesma e não tiver passado o prazo (cfg.months)
  function read(){
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (!s || s.version !== cfg.version) return null;
      const end = new Date(s.date); end.setMonth(end.getMonth() + cfg.months);
      return Date.now() < +end ? s : null;
    } catch { return null; }
  }
  function save(choices){
    state = { version: cfg.version, date: new Date().toISOString(), choices };
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
    closeBanner(); closeModal();
    listeners.forEach(fn => fn());
  }
  const all = value => Object.fromEntries(cfg.categories.map(c => [c, value]));
  const has = cat => !!(state && state.choices[cat]);
  const T = () => I18N[lang].consent;
  const btn = (act, label) => `<button type="button" class="btn btn-ghost" data-consent="${act}">${label}</button>`;

  function showBanner(){
    closeBanner();
    const t = T();
    banner = document.createElement("div");
    banner.className = "cookie-banner"; banner.setAttribute("role", "region"); banner.setAttribute("aria-label", t.title);
    banner.innerHTML = `
      <div class="cookie-text"><b>${t.title}</b><p>${t.text} <a href="legal.html?doc=cookies">${t.more}</a></p></div>
      <div class="cookie-actions">${btn("accept", t.accept)}${btn("reject", t.reject)}${btn("custom", t.customize)}</div>`;
    document.body.appendChild(banner);
  }
  function closeBanner(){ if (banner) { banner.remove(); banner = null; } }

  function open(){
    closeModal();
    const t = T();
    modal = document.createElement("div");
    modal.className = "cookie-modal"; modal.setAttribute("role", "dialog"); modal.setAttribute("aria-modal", "true"); modal.setAttribute("aria-labelledby", "cookiePrefsTitle");
    modal.innerHTML = `
      <div class="cookie-box">
        <button type="button" class="close" data-consent="close" aria-label="×">×</button>
        <h2 id="cookiePrefsTitle">${t.prefsTitle}</h2>
        <p class="cookie-lead">${t.prefsText} <a href="legal.html?doc=cookies">${t.more}</a></p>
        <div class="cookie-cat"><div><b>${t.cats.necessary[0]}</b><p>${t.cats.necessary[1]}</p></div><span class="cookie-always">${t.always}</span></div>
        ${cfg.categories.map(c => `
        <label class="cookie-cat"><div><b>${t.cats[c][0]}</b><p>${t.cats[c][1]}</p></div>
          <input type="checkbox" data-cat="${c}" ${has(c) ? "checked" : ""}><span class="cookie-switch" aria-hidden="true"></span></label>`).join("")}
        <div class="cookie-actions">${btn("save", t.save)}${btn("reject", t.reject)}${btn("accept", t.accept)}</div>
      </div>`;
    document.body.appendChild(modal);
    modal.querySelector("[data-consent=close]").focus();
  }
  function closeModal(){ if (modal) { modal.remove(); modal = null; } }

  document.addEventListener("click", e => {
    if (e.target.closest("[data-cookie-prefs]")) { e.preventDefault(); open(); return; }
    if (modal && e.target === modal) { closeModal(); return; }
    const b = e.target.closest("[data-consent]"); if (!b) return;
    const act = b.dataset.consent;
    if (act === "accept") save(all(true));
    else if (act === "reject") save(all(false));
    else if (act === "custom") open();
    else if (act === "close") closeModal();
    else if (act === "save") save(Object.fromEntries([...modal.querySelectorAll("[data-cat]")].map(i => [i.dataset.cat, i.checked])));
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  return {
    has, open,
    onChange: fn => listeners.push(fn),
    grant: cat => save({ ...all(false), ...(state ? state.choices : {}), [cat]: true }),
    setLang(l){
      lang = I18N[l] ? l : CONFIG.defaultLang;
      if (modal) open();
      if (!state) showBanner();
    }
  };
})();
