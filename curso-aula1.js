/* =====================================================================
   AULA 1 — dados da aula (edite os textos aqui)
   Para criar a Aula 2: copie este arquivo para curso-aula2.js, troque
   id/textos e adicione <script src="curso-aula2.js"></script> em curso.html.

   Legenda da pronúncia aproximada:
     MAIÚSCULAS = sílaba forte · rr = som de garganta do "g"/"ch"
     ü = "i" com a boca em bico (como o "u" francês) · â = vogal fraca
   ===================================================================== */
window.AULAS = window.AULAS || [];
{
const VIDEO_ID = "";   // ID do vídeo no YouTube (ex.: "dQw4w9WgXcQ"). Vazio = bloco do vídeo não aparece.

AULAS.push({
  id: 1,
  title: "Primeiras frases",
  subtitle: "Cumprimentar, se apresentar e pedir para repetirem — o básico para o seu primeiro dia na Flandres.",
  video: VIDEO_ID,
  duration: "15 min",

  intro: "Na Flandres (norte da Bélgica) fala-se o mesmo idioma da Holanda — o neerlandês —, mas com sotaque mais suave e algumas palavras próprias: aqui, <b>“Dag!”</b> serve tanto para dizer oi quanto tchau, e muita gente diz <b>“merci”</b> no lugar de “dank u”.",

  pronunciation: {
    title: "As 3 armadilhas para brasileiros",
    lead: "Domine estes três sons e você já vai ser entendido muito melhor.",
    items: [
      {
        sound: "g / ch",
        desc: "Os dois têm o mesmo som: um “rr” raspado no fundo da garganta, parecido com o “rr” de “carro” no sotaque carioca. Na Flandres ele é mais suave que na Holanda. Nunca pronuncie como o “g” de “gato”.",
        examples: [
          { nl: "goed", pron: "rrut", pt: "bom / bem" },
          { nl: "dag", pron: "dárr", pt: "oi / tchau" },
          { nl: "acht", pron: "árrt", pt: "oito" }
        ]
      },
      {
        sound: "ui",
        desc: "Não existe em português. Comece com um “é” fazendo bico com os lábios e deslize para um “i”, ainda em bico. Fica algo entre “âi” e “êu”. Escrevemos “âi”, mas lembre do bico!",
        examples: [
          { nl: "uit", pron: "âit", pt: "de / para fora" },
          { nl: "huis", pron: "hâis", pt: "casa" },
          { nl: "buiten", pron: "BÂI-tân", pt: "lá fora" }
        ]
      },
      {
        sound: "ij / ei",
        desc: "As duas grafias têm exatamente o mesmo som: “éi”, como em “papéis”. Não é “i” nem “ji”.",
        examples: [
          { nl: "mijn", pron: "méin", pt: "meu / minha" },
          { nl: "trein", pron: "tréin", pt: "trem" },
          { nl: "rijbewijs", pron: "RÉI-bâ-wéis", pt: "carteira de motorista" }
        ]
      }
    ]
  },

  phrases: {
    title: "Cumprimentos e se apresentar",
    lead: "Toque em ▶ para ouvir. Repita em voz alta pelo menos três vezes.",
    items: [
      { nl: "Dag!", pron: "dárr", pt: "Oi! / Tchau!", note: "A palavra mais útil da Flandres: serve para chegar e para sair." },
      { nl: "Goeiedag!", pron: "RRÚ-iê-dárr", pt: "Bom dia! / Olá!", note: "Um pouco mais formal que “Dag!”. Vale a qualquer hora do dia." },
      { nl: "Hoe gaat het?", pron: "hu RRÁT ât", pt: "Como vai?", note: "Entre amigos você também vai ouvir “Hoe is 't?”." },
      { nl: "Goed, dank u! En met u?", pron: "rrut, DANK ü! en mét ü?", pt: "Bem, obrigado(a)! E você?", note: "Na Flandres você também vai ouvir “merci” no lugar de “dank u”." },
      { nl: "Ik heet …", say: "Ik heet Ana.", pron: "ik HÊT …", pt: "Eu me chamo …", note: "Complete com o seu nome: “Ik heet Ana.”" },
      { nl: "Ik kom uit Brazilië.", pron: "ik kom âit bra-ZÍ-li-â", pt: "Eu sou do Brasil." },
      { nl: "Ik spreek een beetje Nederlands.", pron: "ik SPRÊK ân BÊ-tchâ NÊ-dâr-lants", pt: "Eu falo um pouco de holandês." },
      { nl: "Ik begrijp het niet.", pron: "ik bâ-RRÉIP ât NÍT", pt: "Eu não entendi." },
      { nl: "Kunt u dat herhalen, alstublieft?", pron: "kânt ü dat hér-HÁ-lân, als-tü-BLÍFT?", pt: "Pode repetir, por favor?" },
      { nl: "Spreekt u Engels of Frans?", pron: "SPRÊKT ü ÊN-âls of FRANS?", pt: "Você fala inglês ou francês?", note: "Na Flandres, pergunte em holandês antes de partir para o francês — é mais bem recebido." },
      { nl: "Dank u wel!", pron: "DANK ü wél", pt: "Muito obrigado(a)!", note: "Use “u” com desconhecidos, na gemeente, no médico." },
      { nl: "Alstublieft.", pron: "als-tü-BLÍFT", pt: "Por favor. / Aqui está. / De nada.", note: "Na Bélgica também é a resposta para “Dank u wel” (= de nada)." },
      { nl: "Excuseer!", pron: "éks-kü-ZÊR", pt: "Com licença! / Desculpe!", note: "Bem flamengo: para pedir passagem ou chamar a atenção de alguém." }
    ]
  },

  quiz: [
    {
      q: "Na Flandres, o que significa “Dag!”?",
      options: ["Só “bom dia”", "Oi e também tchau", "Obrigado", "Por favor"],
      answer: 1,
      explain: "“Dag!” serve tanto para chegar quanto para ir embora."
    },
    {
      q: "Como você diz “Eu não entendi”?",
      options: ["Ik spreek een beetje Nederlands.", "Ik kom uit Brazilië.", "Ik begrijp het niet.", "Hoe gaat het?"],
      answer: 2,
      explain: "“Ik begrijp het niet” = eu não entendi. “Begrijpen” = entender."
    },
    {
      q: "O atendente da gemeente falou rápido demais. O que você pede?",
      options: ["Excuseer!", "Kunt u dat herhalen, alstublieft?", "Goeiedag!", "Dank u wel!"],
      answer: 1,
      explain: "“Kunt u dat herhalen, alstublieft?” = pode repetir, por favor?"
    },
    {
      q: "Como soa o “ij” de “mijn” (meu/minha)?",
      options: ["Como “i” de “vida”", "Como “ji”", "Como “éi” de “papéis”", "Como “ia”"],
      answer: 2,
      explain: "“ij” e “ei” soam igual: “éi”. “Mijn” ≈ “méin”."
    },
    {
      q: "Você agradece com “Dank u wel!” e o atendente responde “Alstublieft”. O que ele quis dizer?",
      options: ["De nada", "Repita, por favor", "Tchau", "Com licença"],
      answer: 0,
      explain: "Na Bélgica, “alstublieft” também é usado como “de nada”."
    }
  ]
});
}
