/* Traduções do site — PT (principal), FR, NL, EN */
const I18N = {

/* ============================ PORTUGUÊS ============================ */
pt: {
  meta: { locale: "pt-BR", title: "Mancini Expat — Sua vida na Bélgica, mais simples",
    desc: "Traduções, interpretação e acompanhamento em órgãos para brasileiros na Bélgica, em português. Agende pelo site." },
  t: {
    "nav.services": "Serviços", "nav.how": "Como funciona", "nav.guides": "Guias", "nav.about": "Sobre", "nav.faq": "FAQ", "nav.course": "Aula grátis de holandês",
    "btn.book": "Agendar",
    "hero.kicker": "Brasil &nbsp;→&nbsp; Bélgica",
    "hero.title": "Sua vida na Bélgica, <em>mais simples.</em>",
    "hero.text": "Traduções, interpretação e acompanhamento em órgãos para brasileiros na Bélgica, em português.",
    "hero.book": "Agendar atendimento", "hero.send": "Enviar documento",
    "trust.1": "Toda a Bélgica", "trust.2": "Atendimento presencial", "trust.3": "Tradução simples ou juramentada",
    "help.eyebrow": "Comece por aqui", "help.title": "Como podemos te ajudar?",
    "help.lead": "Não sabe qual serviço pedir? Escolha a situação mais parecida com a sua.",
    "help.rec": "Recomendamos:",
    "svc.eyebrow": "Serviços", "svc.title": "O que fazemos",
    "svc.lead": "Traduções são feitas sob orçamento; os demais serviços, com horário marcado.",
    "how.eyebrow": "Como funciona", "how.title": "Do pedido ao resultado",
    "how.lead": "O que acontece depois que você entra em contato.",
    "q.eyebrow": "Orçamento", "q.title": "Envie seu documento e receba um orçamento",
    "q.lead": "Diga para qual idioma e para quando precisa. Respondemos pelo WhatsApp.",
    "q.tipsTitle": "Para um orçamento rápido",
    "f.name": "Nome", "f.email": "E-mail", "f.doc": "Tipo de documento",
    "f.doc1": "Certidão", "f.doc2": "Diploma / histórico", "f.doc3": "CNH", "f.doc4": "Contrato / procuração", "f.doc5": "Outro",
    "f.to": "Traduzir para", "l.fr": "Francês", "l.nl": "Holandês", "l.en": "Inglês", "l.pt": "Português",
    "f.urg": "Urgência", "f.urg1": "Normal (5–7 dias úteis)", "f.urg2": "Rápida (2–3 dias úteis)", "f.urg3": "Urgente (24–48h)",
    "f.files": "Documento(s)", "f.drop": "📎 Clique para anexar PDF ou foto", "f.notes": "Observações (opcional)",
    "q.submit": "Solicitar orçamento", "q.note": "🔒 Seus documentos são usados apenas para o orçamento e o serviço.",
    "g.eyebrow": "Estou chegando na Bélgica", "g.title": "Guias para os seus primeiros passos",
    "g.lead": "Dicas práticas sobre o que todo brasileiro precisa resolver ao chegar. Toque em um guia para abrir.",
    "a.eyebrow": "Sobre nós", "a.title": "Brasileiros ajudando brasileiros na Bélgica",
    "a.lead": "A Mancini Expat nasceu da experiência de quem já passou pela burocracia belga e sabe como ela pode ser confusa. Nosso objetivo é que você entenda cada etapa e resolva tudo com segurança.",
    "a.forWho": "Para quem é",
    "faq.eyebrow": "Dúvidas frequentes", "faq.title": "Perguntas frequentes",
    "cta.title": "Tem uma carta, um prazo ou uma consulta marcada?", "cta.text": "Fale com a gente antes do dia: dá tempo de preparar tudo com calma.",
    "foot.tag": "A burocracia belga, explicada em português.", "foot.site": "Site", "foot.contact": "Contato", "foot.country": "Bélgica", "foot.dev": "Desenvolvido por",
    "foot.legalTitle": "Legal", "foot.privacy": "Política de Privacidade", "foot.cookies": "Política de Cookies", "foot.legal": "Aviso legal", "foot.prefs": "Preferências de cookies",
    "legal.updated": "Última atualização", "legal.back": "Voltar ao site",
    "f.privacy": "Ao enviar, você confirma que leu a nossa <a href=\"legal.html?doc=privacy\" target=\"_blank\">Política de Privacidade</a>.",
    "cal.note": "Horários no fuso de Bruxelas. A confirmação final é feita pelo WhatsApp.", "cal.loading": "Verificando horários disponíveis…",
    "cal.none": "Sem horários livres. Escolha outra data ou fale com a gente pelo WhatsApp.", "cal.taken": "Esse horário não está mais disponível. Escolha outro.", "cal.prev": "Mês anterior", "cal.next": "Próximo mês", "foot.partners": "Parceiros",
    "p.eyebrow": "Parceiros", "p.title": "Nossos parceiros",
    "m.eyebrow": "Agendamento",
    "m.fullname": "Nome completo", "m.need": "Conte brevemente o que precisa", "m.confirm": "Confirmar agendamento",
    "m.success": "Pedido de agendamento enviado!", "m.successText": "Vamos confirmar seu horário pelo WhatsApp em breve.",
    "m.close": "Fechar", "m.back": "Voltar"
  },
  steps: ["", "Passo 1 de 3 — Serviço", "", "Passo 2 de 3 — Data e horário", "Passo 3 de 3 — Seus dados", ""],
  titles: ["", "Escolha o serviço", "", "Escolha data e horário", "Confirme seus dados", ""],
  sum: { service: "Serviço", date: "Data", time: "Horário" },
  wa: {
    hello: "Olá! Vim pelo site da Mancini Expat e gostaria de mais informações.",
    quote: "Olá! Gostaria de um orçamento de tradução.", book: "Olá! Gostaria de confirmar um agendamento.",
    name: "Nome", phone: "WhatsApp", email: "E-mail", doc: "Documento", lang: "Idioma", urg: "Urgência", files: "Arquivos", notes: "Obs.",
    sendFiles: "(Vou enviar os arquivos em seguida.)"
  },
  // Banner e preferências de cookies (consent.js). Categorias ativas: CONFIG.consent.categories
  consent: {
    title: "Cookies e privacidade",
    text: "Guardamos no seu navegador só o necessário para o site funcionar: idioma, progresso da aula e esta escolha. Com a sua permissão, também carregamos vídeos do YouTube, que pode gravar cookies.",
    more: "Política de Cookies", accept: "Aceitar todos", reject: "Recusar", customize: "Personalizar", save: "Salvar escolhas",
    prefsTitle: "Preferências de cookies", always: "Sempre ativos",
    prefsText: "Escolha o que você permite. Dá para mudar de ideia a qualquer momento pelo link “Preferências de cookies” no rodapé.",
    cats: {
      necessary: ["Necessários","Guardam o idioma escolhido, o seu progresso na aula de holandês e a sua escolha de cookies. Ficam só no seu navegador."],
      media: ["Mídia e vídeos","Permite carregar vídeos do YouTube nas aulas. O YouTube (Google) pode gravar cookies e receber o seu endereço IP."],
      stats: ["Estatísticas","Medem como o site é usado, para melhorarmos o conteúdo."]
    },
    video: "Para ver o vídeo, aceite os cookies de mídia. O vídeo é carregado do YouTube, que pode gravar cookies.",
    videoBtn: "Aceitar cookies de mídia e ver o vídeo"
  },
  // Textos dos parceiros (nome, url e logo ficam em CONFIG.partners, em config.js)
  partners: {
    a2tripgo: { title: "Parceiro de viagens: A2 TripGo", text: "Vai visitar a família no Brasil ou quer conhecer a Europa? A A2 TripGo é a nossa parceira em viagens: consultoria personalizada, passagens aéreas e roteiros sob medida, com atendimento em português e cotação gratuita em até 24h.", cta: "Conhecer a A2 TripGo" }
  },
  situations: [
    { id: "carta", svc: "consulta", text: "Recebi uma carta da commune e não entendi.", advice: "Traga a carta para uma consulta de orientação: explicamos o que ela pede, qual é o prazo e o que fazer em seguida." },
    { id: "medico", svc: "interprete", text: "Vou ao médico e não falo francês nem holandês.", advice: "Um intérprete vai com você à consulta. Agende com antecedência e anote suas dúvidas e os remédios que você toma." },
    { id: "traduzir", svc: "traducao", text: "Pediram meus documentos traduzidos.", advice: "Envie uma foto do documento e diga qual órgão pediu a tradução: assim confirmamos se ela precisa ser juramentada." },
    { id: "orgao", svc: "acompanhamento", text: "Tenho um compromisso na commune ou no Office des Étrangers.", advice: "Vamos juntos ao atendimento. Antes, conferimos a convocação e a lista de documentos, para você não precisar voltar." },
    { id: "chegou", svc: "consulta", text: "Acabei de chegar e não sei por onde começar.", advice: "Na consulta de orientação montamos com você a ordem das etapas: commune, banco, mutualidade e documentos. Veja também os guias mais abaixo." },
    { id: "reuniao", svc: "interprete", text: "Tenho uma reunião na escola, com advogado ou no trabalho.", advice: "Um intérprete participa da reunião com você, para que nenhum detalhe se perca." }
  ],
  services: [
    { id: "traducao", title: "Traduções", dur: "Sob orçamento", desc: "Para documentos que a commune, a escola, a universidade ou o empregador pedem no idioma local.", items: ["Certidões, diplomas, históricos, CNH e contratos", "Tradução simples ou juramentada", "Legalização e apostila"] },
    { id: "interprete", title: "Interpretação", dur: "1h – 3h", desc: "Para quando você precisa entender e ser entendido numa conversa importante.", items: ["Consultas médicas e hospital", "Advogado e notário", "Reuniões na escola e no trabalho"] },
    { id: "acompanhamento", title: "Acompanhamento em órgãos", dur: "Presencial", desc: "Para ir a um órgão público com alguém que conhece o caminho e fala com o atendente por você.", items: ["Inscrição na commune", "Carte de séjour e renovações", "CPAS e Office des Étrangers"] },
    { id: "consulta", title: "Consulta de orientação", dur: "30 min", desc: "Para entender sua situação antes de decidir o que fazer, ou o que contratar.", items: ["Análise da carta ou do documento que você recebeu", "Plano de ação com as próximas etapas", "Orçamento na hora, se precisar de um serviço"] }
  ],
  how: [
    ["Conte o que precisa", "Agende um horário ou envie seu documento pelo site. A mensagem chega ao nosso WhatsApp já preenchida, sem você precisar explicar tudo de novo."],
    ["Receba preço e prazo", "Respondemos pelo WhatsApp com o preço e o prazo. Você só paga depois de aprovar, por transferência bancária ou Bancontact."],
    ["Receba o resultado", "Traduções ficam prontas no prazo escolhido no pedido: normal, rápido ou urgente. Atendimentos: confirmamos data, hora e local pelo WhatsApp e encontramos você lá."]
  ],
  quoteTips: [
    "Fotografe de cima, com boa luz e o documento inteiro visível.",
    "Envie todas as páginas, inclusive o verso se tiver carimbos ou apostila.",
    "Aceitamos PDF ou foto (JPG, PNG).",
    "Precisa de tradução juramentada? Avise nas observações."
  ],
  guides: [
    { tag: "Primeiros dias", title: "Inscrição na commune", tips: [
      "Se você veio para ficar mais de 3 meses, tem 8 dias úteis após a chegada para se apresentar à commune do seu endereço.",
      "Leve passaporte com visto, contrato de aluguel, fotos de identidade recentes e os documentos do seu tipo de visto (contrato de trabalho, matrícula etc.).",
      "Depois do pedido, um agente de bairro (agent de quartier / wijkagent) visita o endereço para confirmar que você mora ali. Deixe seu nome visível na caixa de correio.",
      "Guarde todos os comprovantes que a commune entregar: eles provam que seu processo está em andamento até o cartão de residência ficar pronto."
    ] },
    { tag: "Documentos", title: "O que providenciar ainda no Brasil", tips: [
      "Certidões de nascimento e de casamento em inteiro teor, emitidas recentemente.",
      "Apostila de Haia, feita em cartório no Brasil: sem ela, o documento brasileiro não tem validade na Bélgica.",
      "Diplomas e históricos escolares, se você pretende estudar ou trabalhar na sua área.",
      "Atestado de antecedentes criminais, quando o seu tipo de visto exigir.",
      "Antes de traduzir, pergunte ao órgão se a tradução precisa ser juramentada na Bélgica."
    ] },
    { tag: "Idioma", title: "Francês ou holandês?", tips: [
      "Flandres (norte): holandês. Valônia (sul): francês. Bruxelas: as duas línguas. No leste há também uma pequena região de língua alemã.",
      "O idioma da sua commune é o idioma das cartas, dos formulários e do atendimento.",
      "Em Bruxelas, você escolhe se quer ser atendido em francês ou em holandês.",
      "Vai morar na Flandres? Comece pela nossa <a href=\"curso.html\">aula grátis de holandês</a>."
    ] },
    { tag: "Dia a dia", title: "Saúde, banco e emergências", tips: [
      "Inscreva-se em uma mutualidade (mutualité / ziekenfonds) logo depois do registro: é ela que reembolsa consultas e remédios.",
      "Escolha um médico de família (médecin généraliste / huisarts). É ele quem encaminha você aos especialistas.",
      "Emergência: 112. Médico de plantão fora do horário comercial: 1733.",
      "Para abrir conta, os bancos costumam pedir documento de identidade e comprovante de endereço na Bélgica.",
      "O cartão Bancontact é o meio de pagamento mais aceito no país."
    ] },
    { tag: "Carro", title: "CNH brasileira na Bélgica", tips: [
      "A troca da CNH pela carteira de motorista belga é pedida na commune onde você está inscrito.",
      "Leve a CNH original, documento de identidade e foto.",
      "Não deixe para a última hora: dirigir com uma habilitação que já não vale pode trazer problemas com o seguro."
    ] },
    { tag: "Família", title: "Reagrupamento familiar", tips: [
      "O pedido costuma ser feito na embaixada ou no consulado da Bélgica no Brasil; em alguns casos, na commune, se o familiar já estiver legalmente na Bélgica.",
      "Certidões de nascimento, casamento ou união estável, apostiladas e traduzidas, comprovam o vínculo familiar.",
      "Quem chama a família normalmente precisa comprovar renda estável e suficiente, moradia adequada e seguro saúde.",
      "As regras mudam conforme a nacionalidade de quem chama (belga, europeu ou não europeu). Confira o seu caso no site do Office des Étrangers: dofi.ibz.be."
    ] }
  ],
  forWho: [
    ["Recém-chegados", "Inscrição, documentos e primeiros passos no país."],
    ["Famílias", "Reagrupamento familiar, escola e saúde dos filhos."],
    ["Estudantes e trabalhadores", "Diplomas, contratos e renovação da carte de séjour."],
    ["Quem já mora aqui", "Uma carta, uma consulta ou um processo pontual."]
  ],
  faq: [
    ["Qual a diferença entre tradução simples e juramentada?", "A juramentada é feita por um tradutor juramentado reconhecido na Bélgica e tem validade oficial: é a que communes, tribunais e universidades costumam exigir. A simples serve para entender um documento ou para uso não oficial. Na dúvida, pergunte ao órgão ou a nós."],
    ["Em que dias vocês atendem?", "De segunda a sexta, de manhã e à tarde. Os horários livres aparecem no agendamento."]
  ]
},

/* ============================ FRANÇAIS ============================ */
fr: {
  meta: { locale: "fr-BE", title: "Mancini Expat — Votre vie en Belgique, en plus simple",
    desc: "Traductions, interprétation et accompagnement dans les administrations pour les Brésiliens en Belgique. Prenez rendez-vous en ligne." },
  t: {
    "nav.services": "Services", "nav.how": "Comment ça marche", "nav.guides": "Guides", "nav.about": "À propos", "nav.faq": "FAQ", "nav.course": "Néerlandais gratuit",
    "btn.book": "Rendez-vous",
    "hero.kicker": "Brésil &nbsp;→&nbsp; Belgique",
    "hero.title": "Votre vie en Belgique, <em>en plus simple.</em>",
    "hero.text": "Traductions, interprétation et accompagnement dans les administrations pour les Brésiliens en Belgique.",
    "hero.book": "Prendre rendez-vous", "hero.send": "Envoyer un document",
    "trust.1": "Partout en Belgique", "trust.2": "Service en personne", "trust.3": "Traduction simple ou jurée",
    "help.eyebrow": "Commencez ici", "help.title": "Comment pouvons-nous vous aider ?",
    "help.lead": "Vous ne savez pas quel service demander ? Choisissez la situation qui ressemble le plus à la vôtre.",
    "help.rec": "Nous vous recommandons :",
    "svc.eyebrow": "Services", "svc.title": "Ce que nous faisons",
    "svc.lead": "Les traductions se font sur devis ; les autres services, sur rendez-vous.",
    "how.eyebrow": "Comment ça marche", "how.title": "De la demande au résultat",
    "how.lead": "Ce qui se passe après votre prise de contact.",
    "q.eyebrow": "Devis", "q.title": "Envoyez votre document et recevez un devis",
    "q.lead": "Indiquez la langue et pour quand vous en avez besoin. Nous répondons par WhatsApp.",
    "q.tipsTitle": "Pour un devis rapide",
    "f.name": "Nom", "f.email": "E-mail", "f.doc": "Type de document",
    "f.doc1": "Acte / certificat", "f.doc2": "Diplôme / relevé de notes", "f.doc3": "Permis de conduire", "f.doc4": "Contrat / procuration", "f.doc5": "Autre",
    "f.to": "Traduire vers", "l.fr": "Français", "l.nl": "Néerlandais", "l.en": "Anglais", "l.pt": "Portugais",
    "f.urg": "Délai", "f.urg1": "Normal (5–7 jours ouvrables)", "f.urg2": "Rapide (2–3 jours ouvrables)", "f.urg3": "Urgent (24–48 h)",
    "f.files": "Document(s)", "f.drop": "📎 Cliquez pour joindre un PDF ou une photo", "f.notes": "Remarques (facultatif)",
    "q.submit": "Demander un devis", "q.note": "🔒 Vos documents sont utilisés uniquement pour le devis et le service.",
    "g.eyebrow": "J'arrive en Belgique", "g.title": "Guides pour vos premiers pas",
    "g.lead": "Des conseils pratiques sur ce qu'il faut régler en arrivant. Touchez un guide pour l'ouvrir.",
    "a.eyebrow": "À propos", "a.title": "Des Brésiliens au service des Brésiliens en Belgique",
    "a.lead": "Mancini Expat est née de l'expérience de ceux qui ont déjà affronté l'administration belge et savent à quel point elle peut être déroutante. Notre objectif : que vous compreniez chaque étape et régliez tout en toute sérénité.",
    "a.forWho": "Pour qui",
    "faq.eyebrow": "Questions fréquentes", "faq.title": "Questions fréquentes",
    "cta.title": "Un courrier, un délai ou un rendez-vous à venir ?", "cta.text": "Contactez-nous avant le jour J : nous aurons le temps de tout préparer.",
    "foot.tag": "L'administration belge, expliquée en portugais.", "foot.site": "Site", "foot.contact": "Contact", "foot.country": "Belgique", "foot.dev": "Développé par",
    "foot.legalTitle": "Légal", "foot.privacy": "Politique de confidentialité", "foot.cookies": "Politique de cookies", "foot.legal": "Mentions légales", "foot.prefs": "Préférences de cookies",
    "legal.updated": "Dernière mise à jour", "legal.back": "Retour au site",
    "f.privacy": "En envoyant, vous confirmez avoir lu notre <a href=\"legal.html?doc=privacy\" target=\"_blank\">Politique de confidentialité</a>.",
    "cal.note": "Heures indiquées à l'heure de Bruxelles. La confirmation finale se fait par WhatsApp.", "cal.loading": "Vérification des créneaux disponibles…",
    "cal.none": "Aucun créneau libre. Choisissez une autre date ou contactez-nous par WhatsApp.", "cal.taken": "Ce créneau n'est plus disponible. Choisissez-en un autre.", "cal.prev": "Mois précédent", "cal.next": "Mois suivant", "foot.partners": "Partenaires",
    "p.eyebrow": "Partenaires", "p.title": "Nos partenaires",
    "m.eyebrow": "Rendez-vous",
    "m.fullname": "Nom complet", "m.need": "Décrivez brièvement votre besoin", "m.confirm": "Confirmer le rendez-vous",
    "m.success": "Demande de rendez-vous envoyée !", "m.successText": "Nous vous confirmerons l'horaire par WhatsApp très bientôt.",
    "m.close": "Fermer", "m.back": "Retour"
  },
  steps: ["", "Étape 1 sur 3 — Service", "", "Étape 2 sur 3 — Date et heure", "Étape 3 sur 3 — Vos coordonnées", ""],
  titles: ["", "Choisissez le service", "", "Choisissez la date et l'heure", "Confirmez vos coordonnées", ""],
  sum: { service: "Service", date: "Date", time: "Heure" },
  wa: {
    hello: "Bonjour ! Je viens du site de Mancini Expat et j'aimerais avoir plus d'informations.",
    quote: "Bonjour ! Je souhaite un devis de traduction.", book: "Bonjour ! Je souhaite confirmer un rendez-vous.",
    name: "Nom", phone: "WhatsApp", email: "E-mail", doc: "Document", lang: "Langue", urg: "Délai", files: "Fichiers", notes: "Remarques",
    sendFiles: "(J'envoie les fichiers juste après.)"
  },
  // Banner e preferências de cookies (consent.js). Categorias ativas: CONFIG.consent.categories
  consent: {
    title: "Cookies et vie privée",
    text: "Nous n'enregistrons dans votre navigateur que le nécessaire au fonctionnement du site : langue, progression du cours et ce choix. Avec votre accord, nous chargeons aussi des vidéos YouTube, qui peut déposer des cookies.",
    more: "Politique de cookies", accept: "Tout accepter", reject: "Refuser", customize: "Personnaliser", save: "Enregistrer mes choix",
    prefsTitle: "Préférences de cookies", always: "Toujours actifs",
    prefsText: "Choisissez ce que vous autorisez. Vous pouvez changer d'avis à tout moment via le lien « Préférences de cookies » en bas de page.",
    cats: {
      necessary: ["Nécessaires","Ils retiennent la langue choisie, votre progression dans le cours de néerlandais et votre choix de cookies. Ils restent dans votre navigateur."],
      media: ["Médias et vidéos","Permet de charger des vidéos YouTube dans les cours. YouTube (Google) peut déposer des cookies et recevoir votre adresse IP."],
      stats: ["Statistiques","Ils mesurent l'utilisation du site afin d'améliorer son contenu."]
    },
    video: "Pour voir la vidéo, acceptez les cookies médias. La vidéo est chargée depuis YouTube, qui peut déposer des cookies.",
    videoBtn: "Accepter les cookies médias et voir la vidéo"
  },
  // Textos dos parceiros (nome, url e logo ficam em CONFIG.partners, em config.js)
  partners: {
    a2tripgo: { title: "Partenaire voyages : A2 TripGo", text: "Vous rendez visite à votre famille au Brésil ou vous voulez découvrir l'Europe ? A2 TripGo est notre partenaire voyages : conseil personnalisé, billets d'avion et itinéraires sur mesure, avec un service en portugais et un devis gratuit sous 24 h.", cta: "Découvrir A2 TripGo" }
  },
  situations: [
    { id: "carta", svc: "consulta", text: "J'ai reçu un courrier de la commune et je ne le comprends pas.", advice: "Apportez le courrier à une consultation d'orientation : nous vous expliquons ce qu'il demande, le délai et la marche à suivre." },
    { id: "medico", svc: "interprete", text: "Je vais chez le médecin et je ne parle ni français ni néerlandais.", advice: "Un interprète vous accompagne à la consultation. Réservez à l'avance et notez vos questions et vos médicaments." },
    { id: "traduzir", svc: "traducao", text: "On me demande mes documents traduits.", advice: "Envoyez une photo du document et indiquez quelle administration demande la traduction : nous vérifierons si elle doit être jurée." },
    { id: "orgao", svc: "acompanhamento", text: "J'ai un rendez-vous à la commune ou à l'Office des Étrangers.", advice: "Nous y allons ensemble. Avant, nous vérifions la convocation et la liste des documents pour éviter de devoir revenir." },
    { id: "chegou", svc: "consulta", text: "Je viens d'arriver et je ne sais pas par où commencer.", advice: "Lors de la consultation d'orientation, nous établissons avec vous l'ordre des démarches : commune, banque, mutualité et documents. Consultez aussi les guides plus bas." },
    { id: "reuniao", svc: "interprete", text: "J'ai une réunion à l'école, chez un avocat ou au travail.", advice: "Un interprète participe à la réunion avec vous, pour qu'aucun détail ne se perde." }
  ],
  services: [
    { id: "traducao", title: "Traductions", dur: "Sur devis", desc: "Pour les documents que la commune, l'école, l'université ou l'employeur demandent dans la langue locale.", items: ["Actes, diplômes, relevés de notes, permis et contrats", "Traduction simple ou jurée", "Légalisation et apostille"] },
    { id: "interprete", title: "Interprétation", dur: "1 h – 3 h", desc: "Quand vous devez comprendre et être compris lors d'un échange important.", items: ["Consultations médicales et hôpital", "Avocat et notaire", "Réunions à l'école et au travail"] },
    { id: "acompanhamento", title: "Accompagnement administratif", dur: "En personne", desc: "Pour vous rendre dans une administration avec quelqu'un qui connaît les démarches et parle à l'agent pour vous.", items: ["Inscription à la commune", "Carte de séjour et renouvellements", "CPAS et Office des Étrangers"] },
    { id: "consulta", title: "Consultation d'orientation", dur: "30 min", desc: "Pour comprendre votre situation avant de décider quoi faire, ou quel service demander.", items: ["Analyse du courrier ou du document reçu", "Plan d'action avec les prochaines étapes", "Devis immédiat si un service est nécessaire"] }
  ],
  how: [
    ["Dites-nous ce qu'il vous faut", "Prenez rendez-vous ou envoyez votre document via le site. Le message arrive sur notre WhatsApp déjà rempli, sans devoir tout réexpliquer."],
    ["Recevez le prix et le délai", "Nous vous répondons par WhatsApp avec le prix et le délai. Vous ne payez qu'après avoir accepté le devis, par virement bancaire ou Bancontact."],
    ["Recevez le résultat", "Les traductions sont prêtes dans le délai choisi lors de la demande : normal, rapide ou urgent. Rendez-vous : nous confirmons la date, l'heure et le lieu par WhatsApp et nous vous retrouvons sur place."]
  ],
  quoteTips: [
    "Photographiez le document à plat, avec une bonne lumière et en entier.",
    "Envoyez toutes les pages, y compris le verso s'il porte des cachets ou une apostille.",
    "Nous acceptons les PDF et les photos (JPG, PNG).",
    "Besoin d'une traduction jurée ? Indiquez-le dans les remarques."
  ],
  guides: [
    { tag: "Premiers jours", title: "Inscription à la commune", tips: [
      "Si vous venez pour plus de 3 mois, vous avez 8 jours ouvrables après votre arrivée pour vous présenter à la commune de votre domicile.",
      "Apportez votre passeport avec visa, le bail, des photos d'identité récentes et les documents liés à votre type de visa (contrat de travail, inscription aux études…).",
      "Après la demande, l'agent de quartier passe à votre adresse pour vérifier que vous y habitez. Mettez votre nom sur la boîte aux lettres.",
      "Conservez tous les documents remis par la commune : ils prouvent que votre dossier est en cours jusqu'à la délivrance de la carte de séjour."
    ] },
    { tag: "Documents", title: "Ce qu'il faut préparer au Brésil", tips: [
      "Actes de naissance et de mariage en copie intégrale (inteiro teor), récemment délivrés.",
      "Apostille de La Haye, faite dans un cartório au Brésil : sans elle, le document brésilien n'est pas valable en Belgique.",
      "Diplômes et relevés de notes, si vous comptez étudier ou travailler dans votre domaine.",
      "Extrait de casier judiciaire, lorsque votre type de visa l'exige.",
      "Avant de faire traduire, demandez à l'administration si la traduction doit être jurée en Belgique."
    ] },
    { tag: "Langue", title: "Français ou néerlandais ?", tips: [
      "Flandre (nord) : néerlandais. Wallonie (sud) : français. Bruxelles : les deux langues. À l'est, il existe aussi une petite région germanophone.",
      "La langue de votre commune est celle des courriers, des formulaires et de l'accueil.",
      "À Bruxelles, vous choisissez d'être servi en français ou en néerlandais.",
      "Vous allez vivre en Flandre ? Commencez par notre <a href=\"curso.html\">cours gratuit de néerlandais</a> (en portugais)."
    ] },
    { tag: "Quotidien", title: "Santé, banque et urgences", tips: [
      "Affiliez-vous à une mutualité dès votre inscription : c'est elle qui rembourse les consultations et les médicaments.",
      "Choisissez un médecin généraliste. C'est lui qui vous oriente vers les spécialistes.",
      "Urgences : 112. Médecin de garde en dehors des heures de bureau : 1733.",
      "Pour ouvrir un compte, les banques demandent en général une pièce d'identité et une preuve d'adresse en Belgique.",
      "La carte Bancontact est le moyen de paiement le plus accepté dans le pays."
    ] },
    { tag: "Voiture", title: "Permis de conduire brésilien en Belgique", tips: [
      "L'échange contre un permis belge se demande à la commune où vous êtes inscrit.",
      "Apportez le permis original, une pièce d'identité et une photo.",
      "N'attendez pas le dernier moment : conduire avec un permis qui n'est plus valable peut poser problème avec l'assurance."
    ] },
    { tag: "Famille", title: "Regroupement familial", tips: [
      "La demande se fait généralement à l'ambassade ou au consulat de Belgique au Brésil ; dans certains cas, à la commune si le membre de la famille séjourne déjà légalement en Belgique.",
      "Les actes de naissance, de mariage ou de cohabitation, apostillés et traduits, prouvent le lien familial.",
      "La personne qui fait venir sa famille doit en principe prouver des revenus stables et suffisants, un logement adapté et une assurance maladie.",
      "Les règles varient selon la nationalité de la personne qui fait venir sa famille (belge, européenne ou non européenne). Vérifiez votre cas sur le site de l'Office des Étrangers : dofi.ibz.be."
    ] }
  ],
  forWho: [
    ["Nouveaux arrivants", "Inscription, documents et premiers pas dans le pays."],
    ["Familles", "Regroupement familial, école et santé des enfants."],
    ["Étudiants et travailleurs", "Diplômes, contrats et renouvellement de la carte de séjour."],
    ["Résidents de longue date", "Un courrier, une consultation ou une démarche ponctuelle."]
  ],
  faq: [
    ["Quelle est la différence entre une traduction simple et une traduction jurée ?", "La traduction jurée est réalisée par un traducteur juré reconnu en Belgique et a une valeur officielle : c'est celle qu'exigent généralement les communes, les tribunaux et les universités. La traduction simple sert à comprendre un document ou à un usage non officiel. En cas de doute, demandez à l'administration ou à nous."],
    ["Quels jours travaillez-vous ?", "Du lundi au vendredi, le matin et l'après-midi. Les créneaux libres apparaissent lors de la prise de rendez-vous."]
  ]
},

/* ============================ NEDERLANDS ============================ */
nl: {
  meta: { locale: "nl-BE", title: "Mancini Expat — Uw leven in België, eenvoudiger",
    desc: "Vertalingen, tolken en begeleiding bij diensten voor Brazilianen in België. Maak online een afspraak." },
  t: {
    "nav.services": "Diensten", "nav.how": "Hoe het werkt", "nav.guides": "Gidsen", "nav.about": "Over ons", "nav.faq": "FAQ", "nav.course": "Gratis les Nederlands",
    "btn.book": "Afspraak",
    "hero.kicker": "Brazilië &nbsp;→&nbsp; België",
    "hero.title": "Uw leven in België, <em>eenvoudiger.</em>",
    "hero.text": "Vertalingen, tolken en begeleiding bij diensten voor Brazilianen in België.",
    "hero.book": "Afspraak maken", "hero.send": "Document versturen",
    "trust.1": "In heel België", "trust.2": "Persoonlijk ter plaatse", "trust.3": "Gewone of beëdigde vertaling",
    "help.eyebrow": "Begin hier", "help.title": "Hoe kunnen we u helpen?",
    "help.lead": "Weet u niet welke dienst u nodig heeft? Kies de situatie die het meest op de uwe lijkt.",
    "help.rec": "Wij raden aan:",
    "svc.eyebrow": "Diensten", "svc.title": "Wat we doen",
    "svc.lead": "Vertalingen gebeuren op offerte; de andere diensten op afspraak.",
    "how.eyebrow": "Hoe het werkt", "how.title": "Van aanvraag tot resultaat",
    "how.lead": "Wat er gebeurt nadat u contact opneemt.",
    "q.eyebrow": "Offerte", "q.title": "Stuur uw document en ontvang een offerte",
    "q.lead": "Vermeld de taal en tegen wanneer u het nodig heeft. We antwoorden via WhatsApp.",
    "q.tipsTitle": "Voor een snelle offerte",
    "f.name": "Naam", "f.email": "E-mail", "f.doc": "Soort document",
    "f.doc1": "Akte / attest", "f.doc2": "Diploma / puntenlijst", "f.doc3": "Rijbewijs", "f.doc4": "Contract / volmacht", "f.doc5": "Andere",
    "f.to": "Vertalen naar", "l.fr": "Frans", "l.nl": "Nederlands", "l.en": "Engels", "l.pt": "Portugees",
    "f.urg": "Termijn", "f.urg1": "Normaal (5–7 werkdagen)", "f.urg2": "Snel (2–3 werkdagen)", "f.urg3": "Dringend (24–48 u)",
    "f.files": "Document(en)", "f.drop": "📎 Klik om een pdf of foto toe te voegen", "f.notes": "Opmerkingen (optioneel)",
    "q.submit": "Offerte aanvragen", "q.note": "🔒 Uw documenten worden alleen gebruikt voor de offerte en de dienst.",
    "g.eyebrow": "Ik kom naar België", "g.title": "Gidsen voor uw eerste stappen",
    "g.lead": "Praktische tips over wat u moet regelen bij aankomst. Tik op een gids om hem te openen.",
    "a.eyebrow": "Over ons", "a.title": "Brazilianen die Brazilianen helpen in België",
    "a.lead": "Mancini Expat is ontstaan uit de ervaring van mensen die de Belgische administratie zelf hebben doorlopen en weten hoe verwarrend die kan zijn. Ons doel: dat u elke stap begrijpt en alles zorgeloos regelt.",
    "a.forWho": "Voor wie",
    "faq.eyebrow": "Veelgestelde vragen", "faq.title": "Veelgestelde vragen",
    "cta.title": "Een brief, een termijn of een afspraak op komst?", "cta.text": "Neem vóór de dag zelf contact op: dan hebben we tijd om alles rustig voor te bereiden.",
    "foot.tag": "De Belgische administratie, uitgelegd in het Portugees.", "foot.site": "Website", "foot.contact": "Contact", "foot.country": "België", "foot.dev": "Ontwikkeld door",
    "foot.legalTitle": "Juridisch", "foot.privacy": "Privacybeleid", "foot.cookies": "Cookiebeleid", "foot.legal": "Wettelijke vermeldingen", "foot.prefs": "Cookievoorkeuren",
    "legal.updated": "Laatst bijgewerkt", "legal.back": "Terug naar de website",
    "f.privacy": "Door te verzenden bevestigt u dat u ons <a href=\"legal.html?doc=privacy\" target=\"_blank\">Privacybeleid</a> heeft gelezen.",
    "cal.note": "Tijdstippen in Brusselse tijd. De definitieve bevestiging gebeurt via WhatsApp.", "cal.loading": "Beschikbare tijdstippen worden gecontroleerd…",
    "cal.none": "Geen vrije tijdstippen. Kies een andere datum of contacteer ons via WhatsApp.", "cal.taken": "Dit tijdstip is niet meer beschikbaar. Kies een ander.", "cal.prev": "Vorige maand", "cal.next": "Volgende maand", "foot.partners": "Partners",
    "p.eyebrow": "Partners", "p.title": "Onze partners",
    "m.eyebrow": "Afspraak",
    "m.fullname": "Volledige naam", "m.need": "Beschrijf kort wat u nodig heeft", "m.confirm": "Afspraak bevestigen",
    "m.success": "Afspraakaanvraag verstuurd!", "m.successText": "We bevestigen uw tijdstip binnenkort via WhatsApp.",
    "m.close": "Sluiten", "m.back": "Terug"
  },
  steps: ["", "Stap 1 van 3 — Dienst", "", "Stap 2 van 3 — Datum en uur", "Stap 3 van 3 — Uw gegevens", ""],
  titles: ["", "Kies de dienst", "", "Kies datum en uur", "Bevestig uw gegevens", ""],
  sum: { service: "Dienst", date: "Datum", time: "Uur" },
  wa: {
    hello: "Hallo! Ik kom via de website van Mancini Expat en wil graag meer informatie.",
    quote: "Hallo! Ik wil graag een offerte voor een vertaling.", book: "Hallo! Ik wil graag een afspraak bevestigen.",
    name: "Naam", phone: "WhatsApp", email: "E-mail", doc: "Document", lang: "Taal", urg: "Termijn", files: "Bestanden", notes: "Opmerkingen",
    sendFiles: "(Ik stuur de bestanden meteen door.)"
  },
  // Banner e preferências de cookies (consent.js). Categorias ativas: CONFIG.consent.categories
  consent: {
    title: "Cookies en privacy",
    text: "We bewaren in uw browser alleen wat nodig is om de website te laten werken: taal, voortgang van de les en deze keuze. Met uw toestemming laden we ook YouTube-video's; YouTube kan cookies plaatsen.",
    more: "Cookiebeleid", accept: "Alles aanvaarden", reject: "Weigeren", customize: "Aanpassen", save: "Keuzes opslaan",
    prefsTitle: "Cookievoorkeuren", always: "Altijd actief",
    prefsText: "Kies wat u toelaat. U kunt op elk moment van gedachte veranderen via de link “Cookievoorkeuren” onderaan de pagina.",
    cats: {
      necessary: ["Noodzakelijk","Ze onthouden de gekozen taal, uw voortgang in de les Nederlands en uw cookiekeuze. Ze blijven in uw browser."],
      media: ["Media en video's","Laat toe om YouTube-video's in de lessen te laden. YouTube (Google) kan cookies plaatsen en uw IP-adres ontvangen."],
      stats: ["Statistieken","Ze meten hoe de website wordt gebruikt, zodat we de inhoud kunnen verbeteren."]
    },
    video: "Aanvaard de mediacookies om de video te bekijken. De video wordt geladen vanaf YouTube, dat cookies kan plaatsen.",
    videoBtn: "Mediacookies aanvaarden en video bekijken"
  },
  // Textos dos parceiros (nome, url e logo ficam em CONFIG.partners, em config.js)
  partners: {
    a2tripgo: { title: "Reispartner: A2 TripGo", text: "Gaat u uw familie in Brazilië bezoeken of wilt u Europa ontdekken? A2 TripGo is onze reispartner: persoonlijk advies, vliegtickets en reisroutes op maat, met service in het Portugees en een gratis offerte binnen 24 uur.", cta: "Ontdek A2 TripGo" }
  },
  situations: [
    { id: "carta", svc: "consulta", text: "Ik kreeg een brief van de gemeente en begrijp hem niet.", advice: "Breng de brief mee naar een oriënterend gesprek: we leggen uit wat er gevraagd wordt, wat de termijn is en wat u daarna moet doen." },
    { id: "medico", svc: "interprete", text: "Ik ga naar de dokter en spreek geen Frans of Nederlands.", advice: "Een tolk gaat met u mee naar de consultatie. Boek op voorhand en noteer uw vragen en de medicatie die u neemt." },
    { id: "traduzir", svc: "traducao", text: "Men vraagt mijn documenten vertaald.", advice: "Stuur een foto van het document en vermeld welke dienst de vertaling vraagt: zo kunnen we nagaan of ze beëdigd moet zijn." },
    { id: "orgao", svc: "acompanhamento", text: "Ik heb een afspraak bij de gemeente of de Dienst Vreemdelingenzaken.", advice: "We gaan samen. Vooraf controleren we de oproeping en de lijst met documenten, zodat u niet terug hoeft te komen." },
    { id: "chegou", svc: "consulta", text: "Ik ben net aangekomen en weet niet waar te beginnen.", advice: "Tijdens het oriënterend gesprek bepalen we samen de volgorde van de stappen: gemeente, bank, ziekenfonds en documenten. Bekijk ook de gidsen hieronder." },
    { id: "reuniao", svc: "interprete", text: "Ik heb een vergadering op school, bij een advocaat of op het werk.", advice: "Een tolk neemt samen met u deel aan het gesprek, zodat geen enkel detail verloren gaat." }
  ],
  services: [
    { id: "traducao", title: "Vertalingen", dur: "Op offerte", desc: "Voor documenten die de gemeente, school, universiteit of werkgever in de landstaal vraagt.", items: ["Akten, diploma's, puntenlijsten, rijbewijzen en contracten", "Gewone of beëdigde vertaling", "Legalisatie en apostille"] },
    { id: "interprete", title: "Tolken", dur: "1 u – 3 u", desc: "Wanneer u iemand moet begrijpen en zelf begrepen moet worden in een belangrijk gesprek.", items: ["Dokter en ziekenhuis", "Advocaat en notaris", "Vergaderingen op school en op het werk"] },
    { id: "acompanhamento", title: "Begeleiding bij diensten", dur: "Ter plaatse", desc: "Om naar een overheidsdienst te gaan met iemand die de weg kent en voor u met de medewerker praat.", items: ["Inschrijving bij de gemeente", "Verblijfskaart en verlengingen", "OCMW en Dienst Vreemdelingenzaken"] },
    { id: "consulta", title: "Oriënterend gesprek", dur: "30 min", desc: "Om uw situatie te begrijpen voor u beslist wat u doet, of welke dienst u nodig heeft.", items: ["Analyse van de brief of het document dat u kreeg", "Actieplan met de volgende stappen", "Meteen een offerte als u een dienst nodig heeft"] }
  ],
  how: [
    ["Vertel wat u nodig heeft", "Maak een afspraak of stuur uw document via de website. Het bericht komt al ingevuld binnen op onze WhatsApp, zonder dat u alles opnieuw moet uitleggen."],
    ["Ontvang prijs en termijn", "We antwoorden via WhatsApp met de prijs en de termijn. U betaalt pas nadat u de offerte goedkeurt, via overschrijving of Bancontact."],
    ["Ontvang het resultaat", "Vertalingen zijn klaar binnen de termijn die u bij de aanvraag koos: normaal, snel of dringend. Afspraken: we bevestigen datum, uur en plaats via WhatsApp en ontmoeten u ter plaatse."]
  ],
  quoteTips: [
    "Fotografeer het document van bovenaf, met goed licht en volledig in beeld.",
    "Stuur alle pagina's, ook de achterkant als daar stempels of een apostille op staan.",
    "We aanvaarden pdf's en foto's (JPG, PNG).",
    "Hebt u een beëdigde vertaling nodig? Vermeld het bij de opmerkingen."
  ],
  guides: [
    { tag: "Eerste dagen", title: "Inschrijving bij de gemeente", tips: [
      "Komt u voor meer dan 3 maanden? Dan moet u zich binnen 8 werkdagen na aankomst aanmelden bij de gemeente van uw adres.",
      "Breng uw paspoort met visum, het huurcontract, recente pasfoto's en de documenten van uw type visum mee (arbeidscontract, inschrijving als student…).",
      "Na de aanvraag komt de wijkagent langs om te controleren of u echt op dat adres woont. Zet uw naam op de brievenbus.",
      "Bewaar alle documenten die de gemeente u geeft: ze bewijzen dat uw dossier loopt tot uw verblijfskaart klaar is."
    ] },
    { tag: "Documenten", title: "Wat u nog in Brazilië regelt", tips: [
      "Volledige afschriften (inteiro teor) van uw geboorte- en huwelijksakte, recent afgeleverd.",
      "Apostille van Den Haag, aangevraagd bij een cartório in Brazilië: zonder apostille is een Braziliaans document niet geldig in België.",
      "Diploma's en puntenlijsten, als u in uw vakgebied wilt studeren of werken.",
      "Uittreksel uit het strafregister, wanneer uw type visum dat vraagt.",
      "Vraag vóór u laat vertalen aan de dienst of de vertaling in België beëdigd moet zijn."
    ] },
    { tag: "Taal", title: "Frans of Nederlands?", tips: [
      "Vlaanderen (noorden): Nederlands. Wallonië (zuiden): Frans. Brussel: beide talen. In het oosten is er ook een kleine Duitstalige regio.",
      "De taal van uw gemeente is de taal van de brieven, de formulieren en het loket.",
      "In Brussel kiest u zelf of u in het Frans of in het Nederlands geholpen wordt.",
      "Gaat u in Vlaanderen wonen? Begin met onze <a href=\"curso.html\">gratis les Nederlands</a> (in het Portugees)."
    ] },
    { tag: "Dagelijks leven", title: "Gezondheid, bank en noodgevallen", tips: [
      "Sluit u aan bij een ziekenfonds zodra u ingeschreven bent: het ziekenfonds betaalt raadplegingen en geneesmiddelen terug.",
      "Kies een huisarts. Die verwijst u door naar specialisten.",
      "Noodgevallen: 112. Huisarts van wacht buiten de kantooruren: 1733.",
      "Om een rekening te openen vragen banken meestal een identiteitsdocument en een bewijs van adres in België.",
      "Bancontact is het meest aanvaarde betaalmiddel in het land."
    ] },
    { tag: "Auto", title: "Braziliaans rijbewijs in België", tips: [
      "De omwisseling voor een Belgisch rijbewijs vraagt u aan bij de gemeente waar u ingeschreven bent.",
      "Breng het originele rijbewijs, een identiteitsdocument en een pasfoto mee.",
      "Wacht niet tot het laatste moment: rijden met een rijbewijs dat niet meer geldig is, kan problemen geven met uw verzekering."
    ] },
    { tag: "Gezin", title: "Gezinshereniging", tips: [
      "De aanvraag gebeurt meestal bij de Belgische ambassade of het consulaat in Brazilië; in sommige gevallen bij de gemeente, als het familielid al legaal in België verblijft.",
      "Geboorte-, huwelijks- of samenwoningsakten, met apostille en vertaald, bewijzen de familieband.",
      "Wie zijn gezin laat overkomen, moet in principe stabiele en voldoende inkomsten, gepaste huisvesting en een ziekteverzekering aantonen.",
      "De regels verschillen naargelang de nationaliteit van wie het gezin laat overkomen (Belg, EU-burger of niet-EU-burger). Bekijk uw situatie op de website van de Dienst Vreemdelingenzaken: dofi.ibz.be."
    ] }
  ],
  forWho: [
    ["Nieuwkomers", "Inschrijving, documenten en de eerste stappen in het land."],
    ["Gezinnen", "Gezinshereniging, school en de gezondheid van de kinderen."],
    ["Studenten en werknemers", "Diploma's, contracten en verlenging van de verblijfskaart."],
    ["Wie hier al woont", "Een brief, een consultatie of een eenmalige procedure."]
  ],
  faq: [
    ["Wat is het verschil tussen een gewone en een beëdigde vertaling?", "Een beëdigde vertaling wordt gemaakt door een in België erkende beëdigd vertaler en heeft officiële waarde: gemeenten, rechtbanken en universiteiten vragen meestal die versie. Een gewone vertaling dient om een document te begrijpen of voor niet-officieel gebruik. Twijfelt u? Vraag het aan de dienst of aan ons."],
    ["Op welke dagen werken jullie?", "Van maandag tot vrijdag, in de voor- en namiddag. De vrije tijdstippen ziet u bij het maken van een afspraak."]
  ]
},

/* ============================ ENGLISH ============================ */
en: {
  meta: { locale: "en-GB", title: "Mancini Expat — Your life in Belgium, made simpler",
    desc: "Translations, interpreting and accompaniment to public offices for Brazilians in Belgium. Book online." },
  t: {
    "nav.services": "Services", "nav.how": "How it works", "nav.guides": "Guides", "nav.about": "About", "nav.faq": "FAQ", "nav.course": "Free Dutch lesson",
    "btn.book": "Book",
    "hero.kicker": "Brazil &nbsp;→&nbsp; Belgium",
    "hero.title": "Your life in Belgium, <em>made simpler.</em>",
    "hero.text": "Translations, interpreting and accompaniment to public offices for Brazilians in Belgium.",
    "hero.book": "Book an appointment", "hero.send": "Send a document",
    "trust.1": "All across Belgium", "trust.2": "In-person service", "trust.3": "Standard or sworn translation",
    "help.eyebrow": "Start here", "help.title": "How can we help you?",
    "help.lead": "Not sure which service to ask for? Pick the situation closest to yours.",
    "help.rec": "We recommend:",
    "svc.eyebrow": "Services", "svc.title": "What we do",
    "svc.lead": "Translations are quoted individually; other services are by appointment.",
    "how.eyebrow": "How it works", "how.title": "From request to result",
    "how.lead": "What happens after you get in touch.",
    "q.eyebrow": "Quote", "q.title": "Send your document and get a quote",
    "q.lead": "Tell us the language and when you need it. We reply on WhatsApp.",
    "q.tipsTitle": "For a fast quote",
    "f.name": "Name", "f.email": "Email", "f.doc": "Document type",
    "f.doc1": "Certificate", "f.doc2": "Diploma / transcript", "f.doc3": "Driving licence", "f.doc4": "Contract / power of attorney", "f.doc5": "Other",
    "f.to": "Translate into", "l.fr": "French", "l.nl": "Dutch", "l.en": "English", "l.pt": "Portuguese",
    "f.urg": "Turnaround", "f.urg1": "Standard (5–7 working days)", "f.urg2": "Fast (2–3 working days)", "f.urg3": "Urgent (24–48h)",
    "f.files": "Document(s)", "f.drop": "📎 Click to attach a PDF or photo", "f.notes": "Notes (optional)",
    "q.submit": "Request a quote", "q.note": "🔒 Your documents are only used for the quote and the service.",
    "g.eyebrow": "Moving to Belgium", "g.title": "Guides for your first steps",
    "g.lead": "Practical tips on what you need to sort out when you arrive. Tap a guide to open it.",
    "a.eyebrow": "About us", "a.title": "Brazilians helping Brazilians in Belgium",
    "a.lead": "Mancini Expat was born from the experience of people who have been through Belgian bureaucracy themselves and know how confusing it can be. Our goal is for you to understand every step and get everything done with confidence.",
    "a.forWho": "Who it's for",
    "faq.eyebrow": "FAQ", "faq.title": "Frequently asked questions",
    "cta.title": "Got a letter, a deadline or an appointment coming up?", "cta.text": "Get in touch before the day: there's time to prepare everything calmly.",
    "foot.tag": "Belgian bureaucracy, explained in Portuguese.", "foot.site": "Site", "foot.contact": "Contact", "foot.country": "Belgium", "foot.dev": "Developed by",
    "foot.legalTitle": "Legal", "foot.privacy": "Privacy Policy", "foot.cookies": "Cookie Policy", "foot.legal": "Legal notice", "foot.prefs": "Cookie preferences",
    "legal.updated": "Last updated", "legal.back": "Back to the site",
    "f.privacy": "By submitting, you confirm that you have read our <a href=\"legal.html?doc=privacy\" target=\"_blank\">Privacy Policy</a>.",
    "cal.note": "Times are shown in Brussels time. Final confirmation is done on WhatsApp.", "cal.loading": "Checking available times…",
    "cal.none": "No free slots. Choose another date or contact us on WhatsApp.", "cal.taken": "That time is no longer available. Please choose another.", "cal.prev": "Previous month", "cal.next": "Next month", "foot.partners": "Partners",
    "p.eyebrow": "Partners", "p.title": "Our partners",
    "m.eyebrow": "Booking",
    "m.fullname": "Full name", "m.need": "Briefly tell us what you need", "m.confirm": "Confirm booking",
    "m.success": "Booking request sent!", "m.successText": "We'll confirm your time slot on WhatsApp shortly.",
    "m.close": "Close", "m.back": "Back"
  },
  steps: ["", "Step 1 of 3 — Service", "", "Step 2 of 3 — Date and time", "Step 3 of 3 — Your details", ""],
  titles: ["", "Choose the service", "", "Choose date and time", "Confirm your details", ""],
  sum: { service: "Service", date: "Date", time: "Time" },
  wa: {
    hello: "Hi! I found Mancini Expat's website and would like more information.",
    quote: "Hi! I'd like a quote for a translation.", book: "Hi! I'd like to confirm a booking.",
    name: "Name", phone: "WhatsApp", email: "Email", doc: "Document", lang: "Language", urg: "Turnaround", files: "Files", notes: "Notes",
    sendFiles: "(I'll send the files right after.)"
  },
  // Banner e preferências de cookies (consent.js). Categorias ativas: CONFIG.consent.categories
  consent: {
    title: "Cookies and privacy",
    text: "We only store in your browser what the site needs to work: language, lesson progress and this choice. With your permission, we also load YouTube videos, and YouTube may set cookies.",
    more: "Cookie Policy", accept: "Accept all", reject: "Refuse", customize: "Customise", save: "Save choices",
    prefsTitle: "Cookie preferences", always: "Always active",
    prefsText: "Choose what you allow. You can change your mind at any time using the “Cookie preferences” link in the footer.",
    cats: {
      necessary: ["Necessary","They remember your chosen language, your progress in the Dutch lesson and your cookie choice. They stay in your browser."],
      media: ["Media and videos","Allows YouTube videos to load in the lessons. YouTube (Google) may set cookies and receive your IP address."],
      stats: ["Statistics","They measure how the site is used so we can improve its content."]
    },
    video: "To watch the video, accept media cookies. The video is loaded from YouTube, which may set cookies.",
    videoBtn: "Accept media cookies and watch the video"
  },
  // Textos dos parceiros (nome, url e logo ficam em CONFIG.partners, em config.js)
  partners: {
    a2tripgo: { title: "Travel partner: A2 TripGo", text: "Visiting family in Brazil or planning to explore Europe? A2 TripGo is our travel partner: personalised advice, flights and tailor-made itineraries, with service in Portuguese and a free quote within 24 hours.", cta: "Visit A2 TripGo" }
  },
  situations: [
    { id: "carta", svc: "consulta", text: "I got a letter from the commune and I don't understand it.", advice: "Bring the letter to an orientation session: we explain what it asks for, the deadline and what to do next." },
    { id: "medico", svc: "interprete", text: "I'm seeing a doctor and don't speak French or Dutch.", advice: "An interpreter goes with you to the appointment. Book ahead and write down your questions and the medication you take." },
    { id: "traduzir", svc: "traducao", text: "I've been asked for translated documents.", advice: "Send a photo of the document and tell us which office asked for the translation, so we can check whether it must be sworn." },
    { id: "orgao", svc: "acompanhamento", text: "I have an appointment at the commune or the Immigration Office.", advice: "We go together. Beforehand, we check the summons and the list of documents so you don't have to go back." },
    { id: "chegou", svc: "consulta", text: "I've just arrived and don't know where to start.", advice: "In the orientation session we plan the order of your steps with you: commune, bank, health fund and documents. See also the guides below." },
    { id: "reuniao", svc: "interprete", text: "I have a meeting at school, with a lawyer or at work.", advice: "An interpreter joins the meeting with you, so no detail gets lost." }
  ],
  services: [
    { id: "traducao", title: "Translations", dur: "On quote", desc: "For documents the commune, school, university or employer require in the local language.", items: ["Certificates, diplomas, transcripts, licences and contracts", "Standard or sworn translation", "Legalisation and apostille"] },
    { id: "interprete", title: "Interpreting", dur: "1h – 3h", desc: "For when you need to understand and be understood in an important conversation.", items: ["Medical appointments and hospital", "Lawyer and notary", "Meetings at school and at work"] },
    { id: "acompanhamento", title: "Accompaniment to offices", dur: "In person", desc: "To visit a public office with someone who knows the way and talks to the staff for you.", items: ["Registering at the commune", "Residence card and renewals", "CPAS/OCMW and Immigration Office"] },
    { id: "consulta", title: "Orientation session", dur: "30 min", desc: "To understand your situation before deciding what to do, or which service you need.", items: ["Review of the letter or document you received", "Action plan with the next steps", "Quote on the spot if you need a service"] }
  ],
  how: [
    ["Tell us what you need", "Book a time or send your document through the website. The message reaches our WhatsApp already filled in, so you don't have to explain everything again."],
    ["Get price and turnaround", "We reply on WhatsApp with the price and turnaround. You only pay after approving the quote, by bank transfer or Bancontact."],
    ["Get the result", "Translations are ready within the turnaround you chose in your request: standard, fast or urgent. Appointments: we confirm date, time and place on WhatsApp and meet you there."]
  ],
  quoteTips: [
    "Photograph the document from above, in good light and fully visible.",
    "Send every page, including the back if it has stamps or an apostille.",
    "We accept PDFs and photos (JPG, PNG).",
    "Need a sworn translation? Mention it in the notes."
  ],
  guides: [
    { tag: "First days", title: "Registering at the commune", tips: [
      "If you're staying more than 3 months, you have 8 working days after arrival to report to the commune where you live.",
      "Bring your passport with visa, rental contract, recent ID photos and the documents for your visa type (employment contract, enrolment, etc.).",
      "After you apply, a neighbourhood police officer (agent de quartier / wijkagent) visits to confirm you live at the address. Put your name on the letterbox.",
      "Keep every document the commune gives you: it proves your application is in progress until your residence card is ready."
    ] },
    { tag: "Documents", title: "What to arrange while still in Brazil", tips: [
      "Full-content (inteiro teor) birth and marriage certificates, recently issued.",
      "Hague apostille, done at a cartório in Brazil: without it, a Brazilian document isn't valid in Belgium.",
      "Diplomas and transcripts, if you plan to study or work in your field.",
      "Criminal record certificate, when your visa type requires it.",
      "Before translating, ask the office whether the translation must be sworn in Belgium."
    ] },
    { tag: "Language", title: "French or Dutch?", tips: [
      "Flanders (north): Dutch. Wallonia (south): French. Brussels: both. There's also a small German-speaking region in the east.",
      "Your commune's language is the language of its letters, forms and front desk.",
      "In Brussels, you choose whether to be served in French or in Dutch.",
      "Moving to Flanders? Start with our <a href=\"curso.html\">free Dutch lesson</a> (in Portuguese)."
    ] },
    { tag: "Everyday life", title: "Health, banking and emergencies", tips: [
      "Join a health fund (mutualité / ziekenfonds) right after registering: it reimburses doctor visits and medication.",
      "Choose a GP (médecin généraliste / huisarts). Your GP refers you to specialists.",
      "Emergencies: 112. On-call GP outside office hours: 1733.",
      "To open an account, banks usually ask for ID and proof of address in Belgium.",
      "Bancontact is the most widely accepted payment method in the country."
    ] },
    { tag: "Driving", title: "Brazilian driving licence in Belgium", tips: [
      "You apply to exchange it for a Belgian licence at the commune where you're registered.",
      "Bring the original licence, ID and a photo.",
      "Don't leave it to the last minute: driving on a licence that's no longer valid can cause problems with your insurance."
    ] },
    { tag: "Family", title: "Family reunification", tips: [
      "The application is usually made at the Belgian embassy or consulate in Brazil; in some cases at the commune, if the family member is already legally in Belgium.",
      "Birth, marriage or partnership certificates, apostilled and translated, prove the family link.",
      "The person bringing their family over usually has to show stable and sufficient income, suitable housing and health insurance.",
      "The rules depend on the nationality of the person bringing the family (Belgian, EU or non-EU). Check your case on the Immigration Office website: dofi.ibz.be."
    ] }
  ],
  forWho: [
    ["Newcomers", "Registration, documents and first steps in the country."],
    ["Families", "Family reunification, school and children's health."],
    ["Students and workers", "Diplomas, contracts and residence card renewal."],
    ["Long-term residents", "A letter, an appointment or a one-off procedure."]
  ],
  faq: [
    ["What's the difference between a standard and a sworn translation?", "A sworn translation is done by a sworn translator recognised in Belgium and has official validity: it's what communes, courts and universities usually require. A standard translation is for understanding a document or for unofficial use. If in doubt, ask the office or ask us."],
    ["Which days do you work?", "Monday to Friday, mornings and afternoons. Available slots appear when you book."]
  ]
}
};
