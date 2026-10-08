/* ====== Textos das páginas legais (legal.html) — PT, FR, NL, EN ======
   Cada documento: intro + sections [título, HTML]. Mantenha as mesmas seções nos 4 idiomas.
   {chaves} são trocadas pelos dados de CONFIG (config.js): {name} {legalName} {legalForm} {address} {bce} {vat}
   {responsible} {email} {phone} {retentionText} {consentMonths}. Dado vazio em CONFIG.company aparece como [PREENCHER: ...].
   Ao mudar o conteúdo das políticas, atualize CONFIG.consent.policyDate (e CONFIG.consent.version, se mudar o uso de cookies). */
const LEGAL = {

/* ============================ PORTUGUÊS ============================ */
pt: {
  // Seção 5 da privacidade: %n = CONFIG.company.retentionMonths (0 usa keepNone)
  keepFor: "Guardamos seus dados e documentos pelo tempo necessário para o orçamento e o serviço e, depois disso, por %n meses.",
  keepNone: "Guardamos seus dados e documentos só pelo tempo necessário para o orçamento e o serviço. Depois disso, eles são apagados.",
  privacy: {
    intro: "Esta política explica quais dados pessoais a {name} trata quando você usa este site, para quê, e quais são os seus direitos, de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a lei belga de 30 de julho de 2018.",
    sections: [
      ["1. Quem é o responsável pelos seus dados", "<p>{legalName}, {address}, nº de empresa {bce}.<br>Contato para assuntos de privacidade: {email} · {phone}.</p>"],
      ["2. Quais dados coletamos", "<ul><li><b>Pedido de orçamento:</b> nome, WhatsApp, e-mail, tipo de documento, idioma, urgência, nome dos arquivos escolhidos e observações.</li><li><b>Pedido de agendamento:</b> nome completo, WhatsApp, e-mail, serviço, data, horário e a descrição do que você precisa.</li><li><b>Documentos:</b> os arquivos que você nos envia para orçamento, tradução ou análise. Eles podem conter dados pessoais seus e de familiares.</li></ul><p>O site não tem cadastro, não usa cookies de publicidade e não usa ferramentas de estatística.</p>"],
      ["3. Como os dados chegam até nós", "<p>Os formulários do site não gravam nada em um servidor nosso. Ao enviar, o site monta uma mensagem e abre o WhatsApp no seu aparelho: os dados só chegam até nós quando você envia essa mensagem. Os arquivos escolhidos no formulário não são enviados pelo site; você os envia em seguida, pelo próprio WhatsApp.</p>"],
      ["4. Para que usamos e com qual base legal", "<ul><li>Responder ao seu pedido, preparar o orçamento, marcar o atendimento e prestar o serviço: medidas pré-contratuais e execução do contrato (art. 6.1.b do RGPD).</li><li>Cumprir obrigações contábeis e fiscais: obrigação legal (art. 6.1.c do RGPD).</li><li>Carregar vídeos do YouTube: seu consentimento (art. 6.1.a do RGPD), que você pode retirar a qualquer momento.</li></ul>"],
      ["5. Por quanto tempo guardamos", "<p>{retentionText} Documentos contábeis, como faturas, são guardados pelo prazo exigido pela lei belga.</p>"],
      ["6. Com quem compartilhamos", "<p>Não vendemos nem cedemos seus dados. Usamos estes prestadores:</p><ul><li><b>WhatsApp</b> (Meta Platforms Ireland Ltd.): mensagens e arquivos que você nos envia.</li><li><b>Google</b>: e-mail, agenda de atendimentos e, se você aceitar, vídeos do YouTube.</li><li><b>Hostinger</b>: hospedagem do site. Como todo servidor, registra dados técnicos de acesso, como o endereço IP, por segurança.</li></ul><p>Alguns desses prestadores podem tratar dados fora do Espaço Econômico Europeu, com as garantias previstas no RGPD, como as cláusulas contratuais-tipo.</p>"],
      ["7. Consulta à Google Agenda", "<p>Para mostrar os horários livres, o site consulta a nossa Google Agenda quando você abre o agendamento. Essa consulta recebe apenas a lista de horários ocupados e não envia nenhum dado que você preencheu no site. Como em qualquer acesso à internet, o Google recebe dados técnicos da conexão, como o endereço IP.</p>"],
      ["8. Cookies e armazenamento no navegador", "<p>Veja a <a href=\"legal.html?doc=cookies\">Política de Cookies</a>.</p>"],
      ["9. Seus direitos", "<p>Você pode pedir acesso aos seus dados, a correção, a exclusão, a limitação do tratamento, a portabilidade, opor-se ao tratamento e retirar um consentimento já dado. Escreva para {email}: respondemos em até um mês.</p>"],
      ["10. Reclamações", "<p>Se você considerar que seus dados não foram tratados corretamente, pode reclamar à Autoridade de Proteção de Dados da Bélgica (APD/GBA): Rue de la Presse 35, 1000 Bruxelas · contact@apd-gba.be · <a href=\"https://www.autoriteprotectiondonnees.be\" target=\"_blank\" rel=\"noopener\">www.autoriteprotectiondonnees.be</a>.</p>"],
      ["11. Alterações", "<p>Esta política pode ser atualizada. A data da última atualização aparece no topo da página.</p>"]
    ]
  },
  cookies: {
    intro: "Este site não usa cookies de publicidade nem de estatística. Ele guarda algumas informações no armazenamento local do seu navegador (localStorage), que funciona de forma parecida com os cookies.",
    sections: [
      ["1. O que o site guarda no seu navegador", "<div class=\"table-wrap\"><table><thead><tr><th>Nome</th><th>Para quê</th><th>Duração</th><th>Categoria</th></tr></thead><tbody><tr><td><code>lang</code></td><td>Lembrar o idioma escolhido.</td><td>Até você limpar os dados do navegador</td><td>Necessário</td></tr><tr><td><code>mx-curso-progresso</code></td><td>Lembrar que você concluiu a aula de holandês e a nota do quiz.</td><td>Até você limpar os dados do navegador</td><td>Necessário</td></tr><tr><td><code>mx-consent</code></td><td>Guardar a sua escolha de cookies, com a data e a versão desta política.</td><td>{consentMonths} meses</td><td>Necessário</td></tr></tbody></table></div><p>Essas informações ficam só no seu aparelho e não são enviadas a nós nem a terceiros. Por serem necessárias ao funcionamento que você pediu, não dependem de consentimento.</p>"],
      ["2. Conteúdo de terceiros", "<ul><li><b>Vídeos do YouTube (categoria Mídia):</b> as aulas podem ter vídeos. Eles só são carregados se você aceitar os cookies de mídia, e pelo endereço youtube-nocookie.com. Ao assistir, o YouTube (Google) pode gravar cookies e receber o seu endereço IP; a duração é definida pelo Google.</li><li><b>Google Agenda:</b> ao abrir o agendamento, o site consulta os nossos horários ocupados. Nenhum cookie é gravado e nenhum dado seu é enviado, além dos dados técnicos da conexão.</li><li><b>Áudio das aulas:</b> o botão ▶ usa a voz do seu navegador. Em alguns navegadores, a voz é gerada nos servidores do fabricante, que recebem a frase da aula (nunca dados seus).</li><li><b>Links externos:</b> WhatsApp, Instagram e sites de parceiros só são abertos quando você clica, e cada um tem a sua própria política.</li></ul><p>As fontes e as imagens são hospedadas no próprio site.</p>"],
      ["3. Como mudar a sua escolha", "<p>Clique em <a href=\"#\" data-cookie-prefs>Preferências de cookies</a>, aqui ou no rodapé, para aceitar, recusar ou retirar o consentimento a qualquer momento. Perguntamos de novo depois de {consentMonths} meses ou quando esta política mudar. Você também pode apagar tudo nas configurações do navegador, em “limpar dados de navegação”.</p>"]
    ]
  },
  legal: {
    intro: "Informações sobre quem publica este site.",
    sections: [
      ["Editor do site", "<p><b>{legalName}</b> ({legalForm})<br>Sede: {address}<br>Nº de empresa (BCE/KBO): {bce}<br>IVA: {vat}<br>E-mail: {email}<br>Telefone: {phone}<br>Responsável pela publicação: {responsible}</p>"],
      ["Hospedagem e desenvolvimento", "<p>Hospedagem: Hostinger.<br>Desenvolvimento: <a href=\"https://vortexistech.com/\" target=\"_blank\" rel=\"noopener\">Vortexis</a>.</p>"],
      ["Conteúdo do site", "<p>Os guias e as informações deste site são gerais e têm caráter informativo. As regras mudam e cada caso é diferente: confirme sempre com o órgão responsável ou fale com a gente antes de decidir.</p>"],
      ["Dados pessoais", "<p>Veja a <a href=\"legal.html?doc=privacy\">Política de Privacidade</a> e a <a href=\"legal.html?doc=cookies\">Política de Cookies</a>.</p>"]
    ]
  }
},

/* ============================ FRANÇAIS ============================ */
fr: {
  // Seção 5 da privacidade: %n = CONFIG.company.retentionMonths (0 usa keepNone)
  keepFor: "Nous conservons vos données et documents le temps nécessaire au devis et au service, puis pendant %n mois.",
  keepNone: "Nous conservons vos données et documents uniquement le temps nécessaire au devis et au service. Ils sont ensuite supprimés.",
  privacy: {
    intro: "Cette politique explique quelles données personnelles {name} traite lorsque vous utilisez ce site, dans quel but, et quels sont vos droits, conformément au Règlement général sur la protection des données (RGPD) et à la loi belge du 30 juillet 2018.",
    sections: [
      ["1. Responsable du traitement", "<p>{legalName}, {address}, numéro d'entreprise {bce}.<br>Contact pour les questions de vie privée : {email} · {phone}.</p>"],
      ["2. Données collectées", "<ul><li><b>Demande de devis :</b> nom, WhatsApp, e-mail, type de document, langue, délai, nom des fichiers choisis et remarques.</li><li><b>Demande de rendez-vous :</b> nom complet, WhatsApp, e-mail, service, date, heure et description de votre besoin.</li><li><b>Documents :</b> les fichiers que vous nous envoyez pour un devis, une traduction ou une analyse. Ils peuvent contenir des données personnelles vous concernant ou concernant vos proches.</li></ul><p>Le site n'a pas de compte utilisateur, n'utilise pas de cookies publicitaires ni d'outil de statistiques.</p>"],
      ["3. Comment les données nous parviennent", "<p>Les formulaires du site n'enregistrent rien sur un serveur à nous. À l'envoi, le site prépare un message et ouvre WhatsApp sur votre appareil : les données ne nous parviennent que lorsque vous envoyez ce message. Les fichiers choisis dans le formulaire ne sont pas transmis par le site ; vous les envoyez ensuite, via WhatsApp.</p>"],
      ["4. Finalités et base légale", "<ul><li>Répondre à votre demande, préparer le devis, fixer le rendez-vous et fournir le service : mesures précontractuelles et exécution du contrat (art. 6.1.b du RGPD).</li><li>Respecter nos obligations comptables et fiscales : obligation légale (art. 6.1.c du RGPD).</li><li>Charger des vidéos YouTube : votre consentement (art. 6.1.a du RGPD), que vous pouvez retirer à tout moment.</li></ul>"],
      ["5. Durée de conservation", "<p>{retentionText} Les documents comptables, comme les factures, sont conservés pendant la durée imposée par la loi belge.</p>"],
      ["6. Destinataires", "<p>Nous ne vendons ni ne cédons vos données. Nous faisons appel à ces prestataires :</p><ul><li><b>WhatsApp</b> (Meta Platforms Ireland Ltd.) : messages et fichiers que vous nous envoyez.</li><li><b>Google</b> : e-mail, agenda des rendez-vous et, si vous l'acceptez, vidéos YouTube.</li><li><b>Hostinger</b> : hébergement du site. Comme tout serveur, il enregistre des données techniques d'accès, telles que l'adresse IP, pour des raisons de sécurité.</li></ul><p>Certains de ces prestataires peuvent traiter des données en dehors de l'Espace économique européen, avec les garanties prévues par le RGPD, comme les clauses contractuelles types.</p>"],
      ["7. Consultation de Google Agenda", "<p>Pour afficher les créneaux libres, le site consulte notre Google Agenda lorsque vous ouvrez la prise de rendez-vous. Cette consultation ne reçoit que la liste des créneaux occupés et n'envoie aucune donnée saisie sur le site. Comme pour tout accès à internet, Google reçoit des données techniques de connexion, telles que l'adresse IP.</p>"],
      ["8. Cookies et stockage dans le navigateur", "<p>Consultez la <a href=\"legal.html?doc=cookies\">Politique de cookies</a>.</p>"],
      ["9. Vos droits", "<p>Vous pouvez demander l'accès à vos données, leur rectification, leur effacement, la limitation du traitement, leur portabilité, vous opposer au traitement et retirer un consentement déjà donné. Écrivez à {email} : nous répondons dans un délai d'un mois.</p>"],
      ["10. Réclamations", "<p>Si vous estimez que vos données n'ont pas été traitées correctement, vous pouvez introduire une réclamation auprès de l'Autorité de protection des données (APD) : Rue de la Presse 35, 1000 Bruxelles · contact@apd-gba.be · <a href=\"https://www.autoriteprotectiondonnees.be\" target=\"_blank\" rel=\"noopener\">www.autoriteprotectiondonnees.be</a>.</p>"],
      ["11. Modifications", "<p>Cette politique peut être mise à jour. La date de la dernière mise à jour figure en haut de la page.</p>"]
    ]
  },
  cookies: {
    intro: "Ce site n'utilise pas de cookies publicitaires ni de statistiques. Il enregistre quelques informations dans le stockage local de votre navigateur (localStorage), qui fonctionne de manière comparable aux cookies.",
    sections: [
      ["1. Ce que le site enregistre dans votre navigateur", "<div class=\"table-wrap\"><table><thead><tr><th>Nom</th><th>Finalité</th><th>Durée</th><th>Catégorie</th></tr></thead><tbody><tr><td><code>lang</code></td><td>Retenir la langue choisie.</td><td>Jusqu'à ce que vous effaciez les données du navigateur</td><td>Nécessaire</td></tr><tr><td><code>mx-curso-progresso</code></td><td>Retenir que vous avez terminé le cours de néerlandais et votre résultat au quiz.</td><td>Jusqu'à ce que vous effaciez les données du navigateur</td><td>Nécessaire</td></tr><tr><td><code>mx-consent</code></td><td>Enregistrer votre choix en matière de cookies, avec la date et la version de cette politique.</td><td>{consentMonths} mois</td><td>Nécessaire</td></tr></tbody></table></div><p>Ces informations restent sur votre appareil et ne sont transmises ni à nous ni à des tiers. Nécessaires au fonctionnement que vous avez demandé, elles ne requièrent pas de consentement.</p>"],
      ["2. Contenus de tiers", "<ul><li><b>Vidéos YouTube (catégorie Médias) :</b> les cours peuvent contenir des vidéos. Elles ne sont chargées que si vous acceptez les cookies médias, et via l'adresse youtube-nocookie.com. Lors de la lecture, YouTube (Google) peut déposer des cookies et recevoir votre adresse IP ; la durée est fixée par Google.</li><li><b>Google Agenda :</b> à l'ouverture de la prise de rendez-vous, le site consulte nos créneaux occupés. Aucun cookie n'est déposé et aucune donnée vous concernant n'est envoyée, hormis les données techniques de connexion.</li><li><b>Audio des cours :</b> le bouton ▶ utilise la voix de votre navigateur. Dans certains navigateurs, la voix est générée sur les serveurs de l'éditeur, qui reçoivent la phrase du cours (jamais vos données).</li><li><b>Liens externes :</b> WhatsApp, Instagram et les sites de nos partenaires ne s'ouvrent que lorsque vous cliquez, et chacun a sa propre politique.</li></ul><p>Les polices et les images sont hébergées sur le site lui-même.</p>"],
      ["3. Modifier votre choix", "<p>Cliquez sur <a href=\"#\" data-cookie-prefs>Préférences de cookies</a>, ici ou en bas de page, pour accepter, refuser ou retirer votre consentement à tout moment. Nous vous reposons la question après {consentMonths} mois ou lorsque cette politique change. Vous pouvez aussi tout effacer dans les paramètres de votre navigateur, sous « effacer les données de navigation ».</p>"]
    ]
  },
  legal: {
    intro: "Informations sur l'éditeur de ce site.",
    sections: [
      ["Éditeur du site", "<p><b>{legalName}</b> ({legalForm})<br>Siège : {address}<br>Numéro d'entreprise (BCE) : {bce}<br>TVA : {vat}<br>E-mail : {email}<br>Téléphone : {phone}<br>Responsable de la publication : {responsible}</p>"],
      ["Hébergement et développement", "<p>Hébergement : Hostinger.<br>Développement : <a href=\"https://vortexistech.com/\" target=\"_blank\" rel=\"noopener\">Vortexis</a>.</p>"],
      ["Contenu du site", "<p>Les guides et informations de ce site sont généraux et fournis à titre informatif. Les règles évoluent et chaque situation est différente : vérifiez toujours auprès de l'administration compétente ou contactez-nous avant de prendre une décision.</p>"],
      ["Données personnelles", "<p>Consultez la <a href=\"legal.html?doc=privacy\">Politique de confidentialité</a> et la <a href=\"legal.html?doc=cookies\">Politique de cookies</a>.</p>"]
    ]
  }
},

/* ============================ NEDERLANDS ============================ */
nl: {
  // Seção 5 da privacidade: %n = CONFIG.company.retentionMonths (0 usa keepNone)
  keepFor: "We bewaren uw gegevens en documenten zolang dat nodig is voor de offerte en de dienst, en daarna gedurende %n maanden.",
  keepNone: "We bewaren uw gegevens en documenten alleen zolang dat nodig is voor de offerte en de dienst. Daarna worden ze verwijderd.",
  privacy: {
    intro: "Dit beleid legt uit welke persoonsgegevens {name} verwerkt wanneer u deze website gebruikt, waarvoor, en welke rechten u heeft, in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG) en de Belgische wet van 30 juli 2018.",
    sections: [
      ["1. Verwerkingsverantwoordelijke", "<p>{legalName}, {address}, ondernemingsnummer {bce}.<br>Contact voor privacyvragen: {email} · {phone}.</p>"],
      ["2. Welke gegevens we verzamelen", "<ul><li><b>Offerteaanvraag:</b> naam, WhatsApp, e-mail, soort document, taal, termijn, naam van de gekozen bestanden en opmerkingen.</li><li><b>Afspraakaanvraag:</b> volledige naam, WhatsApp, e-mail, dienst, datum, uur en de beschrijving van wat u nodig heeft.</li><li><b>Documenten:</b> de bestanden die u ons stuurt voor een offerte, vertaling of analyse. Ze kunnen persoonsgegevens van u en van uw familieleden bevatten.</li></ul><p>De website heeft geen gebruikersaccounts en gebruikt geen reclamecookies of statistiektools.</p>"],
      ["3. Hoe de gegevens bij ons terechtkomen", "<p>De formulieren op de website slaan niets op een server van ons op. Bij het verzenden stelt de website een bericht op en opent ze WhatsApp op uw toestel: de gegevens bereiken ons pas wanneer u dat bericht verstuurt. De bestanden die u in het formulier kiest, worden niet door de website verstuurd; u stuurt ze daarna zelf via WhatsApp.</p>"],
      ["4. Doeleinden en rechtsgrond", "<ul><li>Uw aanvraag beantwoorden, de offerte opmaken, de afspraak vastleggen en de dienst leveren: precontractuele maatregelen en uitvoering van de overeenkomst (art. 6.1.b AVG).</li><li>Onze boekhoudkundige en fiscale verplichtingen naleven: wettelijke verplichting (art. 6.1.c AVG).</li><li>YouTube-video's laden: uw toestemming (art. 6.1.a AVG), die u op elk moment kunt intrekken.</li></ul>"],
      ["5. Bewaartermijn", "<p>{retentionText} Boekhoudkundige documenten, zoals facturen, bewaren we gedurende de termijn die de Belgische wet oplegt.</p>"],
      ["6. Ontvangers", "<p>We verkopen uw gegevens niet en geven ze niet door. We werken met deze dienstverleners:</p><ul><li><b>WhatsApp</b> (Meta Platforms Ireland Ltd.): berichten en bestanden die u ons stuurt.</li><li><b>Google</b>: e-mail, afsprakenagenda en, als u dat aanvaardt, YouTube-video's.</li><li><b>Hostinger</b>: hosting van de website. Zoals elke server registreert die om veiligheidsredenen technische toegangsgegevens, zoals het IP-adres.</li></ul><p>Sommige van deze dienstverleners kunnen gegevens buiten de Europese Economische Ruimte verwerken, met de waarborgen waarin de AVG voorziet, zoals modelcontractbepalingen.</p>"],
      ["7. Raadpleging van Google Agenda", "<p>Om de vrije tijdstippen te tonen, raadpleegt de website onze Google Agenda wanneer u de afsprakenmodule opent. Die raadpleging ontvangt alleen de lijst met bezette tijdstippen en verstuurt geen gegevens die u op de website heeft ingevuld. Zoals bij elke internetverbinding ontvangt Google technische verbindingsgegevens, zoals het IP-adres.</p>"],
      ["8. Cookies en opslag in de browser", "<p>Zie het <a href=\"legal.html?doc=cookies\">Cookiebeleid</a>.</p>"],
      ["9. Uw rechten", "<p>U kunt vragen om inzage in uw gegevens, verbetering, verwijdering, beperking van de verwerking en overdraagbaarheid, u kunt bezwaar maken tegen de verwerking en een gegeven toestemming intrekken. Schrijf naar {email}: we antwoorden binnen een maand.</p>"],
      ["10. Klachten", "<p>Vindt u dat uw gegevens niet correct zijn verwerkt, dan kunt u een klacht indienen bij de Gegevensbeschermingsautoriteit (GBA): Drukpersstraat 35, 1000 Brussel · contact@apd-gba.be · <a href=\"https://www.gegevensbeschermingsautoriteit.be\" target=\"_blank\" rel=\"noopener\">www.gegevensbeschermingsautoriteit.be</a>.</p>"],
      ["11. Wijzigingen", "<p>Dit beleid kan worden bijgewerkt. De datum van de laatste update staat bovenaan de pagina.</p>"]
    ]
  },
  cookies: {
    intro: "Deze website gebruikt geen reclame- of statistiekcookies. Ze bewaart enkele gegevens in de lokale opslag van uw browser (localStorage), die op een vergelijkbare manier werkt als cookies.",
    sections: [
      ["1. Wat de website in uw browser bewaart", "<div class=\"table-wrap\"><table><thead><tr><th>Naam</th><th>Doel</th><th>Duur</th><th>Categorie</th></tr></thead><tbody><tr><td><code>lang</code></td><td>De gekozen taal onthouden.</td><td>Tot u de browsergegevens wist</td><td>Noodzakelijk</td></tr><tr><td><code>mx-curso-progresso</code></td><td>Onthouden dat u de les Nederlands heeft afgewerkt en uw score voor de quiz.</td><td>Tot u de browsergegevens wist</td><td>Noodzakelijk</td></tr><tr><td><code>mx-consent</code></td><td>Uw cookiekeuze bewaren, met de datum en de versie van dit beleid.</td><td>{consentMonths} maanden</td><td>Noodzakelijk</td></tr></tbody></table></div><p>Deze gegevens blijven op uw toestel en worden niet naar ons of naar derden gestuurd. Ze zijn nodig voor de werking waar u om vraagt en vereisen dus geen toestemming.</p>"],
      ["2. Inhoud van derden", "<ul><li><b>YouTube-video's (categorie Media):</b> de lessen kunnen video's bevatten. Ze worden alleen geladen als u de mediacookies aanvaardt, en via het adres youtube-nocookie.com. Bij het afspelen kan YouTube (Google) cookies plaatsen en uw IP-adres ontvangen; de duur wordt door Google bepaald.</li><li><b>Google Agenda:</b> wanneer u de afsprakenmodule opent, raadpleegt de website onze bezette tijdstippen. Er wordt geen cookie geplaatst en er worden geen gegevens van u verstuurd, behalve de technische verbindingsgegevens.</li><li><b>Audio van de lessen:</b> de knop ▶ gebruikt de stem van uw browser. In sommige browsers wordt de stem gegenereerd op de servers van de fabrikant, die de zin uit de les ontvangen (nooit uw gegevens).</li><li><b>Externe links:</b> WhatsApp, Instagram en websites van partners openen pas wanneer u erop klikt, en hebben elk hun eigen beleid.</li></ul><p>De lettertypes en afbeeldingen staan op de website zelf.</p>"],
      ["3. Uw keuze wijzigen", "<p>Klik op <a href=\"#\" data-cookie-prefs>Cookievoorkeuren</a>, hier of onderaan de pagina, om op elk moment te aanvaarden, te weigeren of uw toestemming in te trekken. We vragen het opnieuw na {consentMonths} maanden of wanneer dit beleid verandert. U kunt ook alles wissen in de instellingen van uw browser, onder “browsegegevens wissen”.</p>"]
    ]
  },
  legal: {
    intro: "Informatie over de uitgever van deze website.",
    sections: [
      ["Uitgever van de website", "<p><b>{legalName}</b> ({legalForm})<br>Zetel: {address}<br>Ondernemingsnummer (KBO): {bce}<br>Btw: {vat}<br>E-mail: {email}<br>Telefoon: {phone}<br>Verantwoordelijke uitgever: {responsible}</p>"],
      ["Hosting en ontwikkeling", "<p>Hosting: Hostinger.<br>Ontwikkeling: <a href=\"https://vortexistech.com/\" target=\"_blank\" rel=\"noopener\">Vortexis</a>.</p>"],
      ["Inhoud van de website", "<p>De gidsen en informatie op deze website zijn algemeen en louter informatief. De regels veranderen en elke situatie is anders: controleer altijd bij de bevoegde dienst of neem contact met ons op voor u een beslissing neemt.</p>"],
      ["Persoonsgegevens", "<p>Zie het <a href=\"legal.html?doc=privacy\">Privacybeleid</a> en het <a href=\"legal.html?doc=cookies\">Cookiebeleid</a>.</p>"]
    ]
  }
},

/* ============================ ENGLISH ============================ */
en: {
  // Seção 5 da privacidade: %n = CONFIG.company.retentionMonths (0 usa keepNone)
  keepFor: "We keep your data and documents for as long as needed for the quote and the service and, after that, for %n months.",
  keepNone: "We keep your data and documents only for as long as needed for the quote and the service. After that, they are deleted.",
  privacy: {
    intro: "This policy explains which personal data {name} processes when you use this website, why, and what your rights are, in line with the General Data Protection Regulation (GDPR) and the Belgian Act of 30 July 2018.",
    sections: [
      ["1. Who is responsible for your data", "<p>{legalName}, {address}, company number {bce}.<br>Contact for privacy matters: {email} · {phone}.</p>"],
      ["2. What data we collect", "<ul><li><b>Quote request:</b> name, WhatsApp, email, document type, language, turnaround, names of the files you selected and notes.</li><li><b>Booking request:</b> full name, WhatsApp, email, service, date, time and the description of what you need.</li><li><b>Documents:</b> the files you send us for a quote, translation or review. They may contain personal data about you and your family members.</li></ul><p>The website has no user accounts and uses no advertising cookies or analytics tools.</p>"],
      ["3. How the data reaches us", "<p>The forms on the website do not store anything on a server of ours. When you submit, the website prepares a message and opens WhatsApp on your device: the data only reaches us when you send that message. Files selected in the form are not transmitted by the website; you send them afterwards, on WhatsApp.</p>"],
      ["4. Purposes and legal basis", "<ul><li>Answering your request, preparing the quote, arranging the appointment and providing the service: pre-contractual steps and performance of the contract (Art. 6(1)(b) GDPR).</li><li>Meeting our accounting and tax obligations: legal obligation (Art. 6(1)(c) GDPR).</li><li>Loading YouTube videos: your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time.</li></ul>"],
      ["5. How long we keep it", "<p>{retentionText} Accounting documents, such as invoices, are kept for the period required by Belgian law.</p>"],
      ["6. Who we share it with", "<p>We do not sell or hand over your data. We use these providers:</p><ul><li><b>WhatsApp</b> (Meta Platforms Ireland Ltd.): messages and files you send us.</li><li><b>Google</b>: email, appointment calendar and, if you accept, YouTube videos.</li><li><b>Hostinger</b>: website hosting. Like any server, it logs technical access data, such as the IP address, for security.</li></ul><p>Some of these providers may process data outside the European Economic Area, with the safeguards provided for by the GDPR, such as standard contractual clauses.</p>"],
      ["7. Google Calendar lookup", "<p>To show free time slots, the website queries our Google Calendar when you open the booking window. That query only receives the list of busy times and sends none of the data you entered on the website. As with any internet access, Google receives technical connection data, such as the IP address.</p>"],
      ["8. Cookies and browser storage", "<p>See the <a href=\"legal.html?doc=cookies\">Cookie Policy</a>.</p>"],
      ["9. Your rights", "<p>You can ask for access to your data, for it to be corrected or deleted, for processing to be restricted and for data portability; you can object to processing and withdraw consent you have given. Write to {email}: we reply within one month.</p>"],
      ["10. Complaints", "<p>If you believe your data has not been handled correctly, you can lodge a complaint with the Belgian Data Protection Authority (APD/GBA): Rue de la Presse 35, 1000 Brussels · contact@apd-gba.be · <a href=\"https://www.dataprotectionauthority.be\" target=\"_blank\" rel=\"noopener\">www.dataprotectionauthority.be</a>.</p>"],
      ["11. Changes", "<p>This policy may be updated. The date of the last update is shown at the top of the page.</p>"]
    ]
  },
  cookies: {
    intro: "This website uses no advertising or analytics cookies. It stores a few items in your browser's local storage (localStorage), which works in a similar way to cookies.",
    sections: [
      ["1. What the website stores in your browser", "<div class=\"table-wrap\"><table><thead><tr><th>Name</th><th>Purpose</th><th>Duration</th><th>Category</th></tr></thead><tbody><tr><td><code>lang</code></td><td>Remember the language you chose.</td><td>Until you clear your browser data</td><td>Necessary</td></tr><tr><td><code>mx-curso-progresso</code></td><td>Remember that you completed the Dutch lesson and your quiz score.</td><td>Until you clear your browser data</td><td>Necessary</td></tr><tr><td><code>mx-consent</code></td><td>Store your cookie choice, with the date and the version of this policy.</td><td>{consentMonths} months</td><td>Necessary</td></tr></tbody></table></div><p>These items stay on your device and are not sent to us or to third parties. Because they are needed for the features you asked for, they do not require consent.</p>"],
      ["2. Third-party content", "<ul><li><b>YouTube videos (Media category):</b> lessons may include videos. They are only loaded if you accept media cookies, and through the youtube-nocookie.com address. When you watch, YouTube (Google) may set cookies and receive your IP address; the duration is set by Google.</li><li><b>Google Calendar:</b> when you open the booking window, the website queries our busy times. No cookie is set and none of your data is sent, apart from technical connection data.</li><li><b>Lesson audio:</b> the ▶ button uses your browser's voice. In some browsers the voice is generated on the vendor's servers, which receive the lesson phrase (never your data).</li><li><b>External links:</b> WhatsApp, Instagram and partner websites only open when you click, and each has its own policy.</li></ul><p>Fonts and images are hosted on the website itself.</p>"],
      ["3. Changing your choice", "<p>Click <a href=\"#\" data-cookie-prefs>Cookie preferences</a>, here or in the footer, to accept, refuse or withdraw your consent at any time. We ask again after {consentMonths} months or when this policy changes. You can also delete everything in your browser settings, under “clear browsing data”.</p>"]
    ]
  },
  legal: {
    intro: "Information about the publisher of this website.",
    sections: [
      ["Website publisher", "<p><b>{legalName}</b> ({legalForm})<br>Registered office: {address}<br>Company number (BCE/KBO): {bce}<br>VAT: {vat}<br>Email: {email}<br>Phone: {phone}<br>Person responsible for publication: {responsible}</p>"],
      ["Hosting and development", "<p>Hosting: Hostinger.<br>Development: <a href=\"https://vortexistech.com/\" target=\"_blank\" rel=\"noopener\">Vortexis</a>.</p>"],
      ["Website content", "<p>The guides and information on this website are general and for information only. Rules change and every case is different: always check with the relevant office or contact us before making a decision.</p>"],
      ["Personal data", "<p>See the <a href=\"legal.html?doc=privacy\">Privacy Policy</a> and the <a href=\"legal.html?doc=cookies\">Cookie Policy</a>.</p>"]
    ]
  }
}
};
