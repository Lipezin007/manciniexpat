/* ====== CONFIGURAÇÃO — edite aqui (usado pelo site e pela aula grátis) ====== */
const CONFIG = {
  whatsapp: "32456321427",            // número com DDI, só dígitos
  phoneLabel: "+32 456 32 14 27",
  email: "manciniexpatservices@gmail.com",
  hours: ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30"],
  workDays: [1,2,3,4,5],              // 0=dom ... 6=sáb
  slotMinutes: 30,                    // duração de cada horário, para cruzar com os eventos da agenda
  daysAhead: 90,                      // até quantos dias à frente dá para agendar
  // URL do Google Apps Script que devolve os horários ocupados (ver google-apps-script/GUIA-INSTALACAO.md).
  // Vazio = todos os horários aparecem como disponíveis.
  availabilityWait: 4000,             // ms que a tela espera pela agenda antes de mostrar tudo livre (a resposta atrasada ainda corrige o calendário)
  availabilityUrl: "https://script.google.com/macros/s/AKfycbzk3MVbdlCKnUD4mEKpQve-i20fdwe3hrOds5GtXsRFhZzygasR4CYKYlB-WosqUVE4/exec",
  defaultLang: "pt",

  // Cookies e consentimento (consent.js)
  consent: {
    version: "2026-10",               // mude quando o uso de cookies mudar: o banner pergunta de novo a todos
    policyDate: "2026-10-06",         // data de "Última atualização" das páginas legais
    months: 6,                        // depois desse prazo o banner pergunta de novo
    categories: ["media"]             // categorias não essenciais ativas. Com estatísticas no site: ["media", "stats"]
  },

  // Dados da empresa para as páginas legais (legal.html). O que ficar vazio aparece como [PREENCHER: ...] no site.
  company: {
    name: "Mancini Expat",
    legalName: "Giordano Luigi Mancini",   // razão social, ou nome do titular se for pessoa física
    // forma jurídica e IVA aceitam um texto único ou um texto por idioma
    legalForm: { pt: "empresa individual", fr: "entreprise individuelle", nl: "eenmanszaak", en: "sole proprietorship" },
    address: "Lellebaan 16, 1910 Kampenhout",   // endereço completo da sede
    bce: "1023.255.770",                         // nº de empresa BCE/KBO (ex.: 0123.456.789)
    vat: "BE 1023.255.770",          // nº de IVA
    responsible: "Giordano Luigi Mancini",   // nome do responsável pela publicação
    retentionMonths: 6                // meses de guarda dos dados depois do serviço. 0 = não guarda · null = [PREENCHER]
  },

  // Parceiros: para adicionar outro, copie a linha e crie os textos (title, text, cta) com o mesmo id
  // em "partners", nos 4 idiomas de i18n.js. logo: caminho do arquivo (ex.: "img/a2tripgo.png"); vazio = mostra só o nome.
  partners: [
    { id: "a2tripgo", name: "A2 TripGo", url: "https://www.a2tripgo.com", logo: "img/a2tripgo.jpg" }
  ]
};
