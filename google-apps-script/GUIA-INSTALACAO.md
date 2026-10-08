# Guia de instalação — horários ocupados via Google Agenda

Para o desenvolvedor. O script roda na conta Google **do cliente** e devolve ao site só os intervalos ocupados da agenda (início e fim, sem títulos nem detalhes).

Arquivos desta pasta:

| Arquivo | Para quê |
|---|---|
| `disponibilidade.gs` | O script. É o único arquivo obrigatório. |
| `appsscript.json` | Manifesto opcional: limita o script a **somente leitura** da agenda. |
| `GUIA-CLIENTE.md` | Instruções curtas para entregar ao cliente. |

Esta pasta **não** precisa ir para a Hostinger.

## 1. Publicar o script na conta do cliente

Faça com o cliente logado na conta da empresa (a senha fica com ele).

1. Abra <https://script.google.com> na conta do cliente e clique em **Novo projeto**.
2. Dê um nome ao projeto, por exemplo `Mancini Expat - disponibilidade`.
3. Apague o conteúdo de `Código.gs` e cole todo o conteúdo de `disponibilidade.gs`. Salve.
4. (Recomendado) Limite a permissão a somente leitura:
   1. Clique na engrenagem **Configurações do projeto** e marque **Mostrar arquivo de manifesto "appsscript.json" no editor**.
   2. Volte ao editor, abra `appsscript.json` e substitua o conteúdo pelo do arquivo `appsscript.json` desta pasta. Salve.
5. No topo do editor, escolha a função **testar** e clique em **Executar**.
6. Na primeira vez o Google pede autorização: **Revisar permissões** > escolha a conta do cliente > **Avançado** > **Acessar "Mancini Expat - disponibilidade" (não seguro)** > **Permitir**. O aviso aparece porque o script é particular, não porque há algo errado.
7. Confira o registro de execução: deve mostrar o nome da agenda e os intervalos ocupados.
8. Clique em **Implantar** > **Nova implantação** > engrenagem > **App da Web** e preencha:
   - **Executar como:** Eu
   - **Quem pode acessar:** Qualquer pessoa
9. Clique em **Implantar** e copie a **URL do app da Web** (termina em `/exec`).

Se o passo 5 der erro de permissão depois de colar o manifesto, apague o bloco `oauthScopes` do `appsscript.json`, salve e execute de novo. O script passa a pedir acesso completo à agenda, mas continua só lendo.

## 2. Testar

1. Abra a URL `/exec` em uma janela anônima. A resposta deve ser um JSON assim:

   ```json
   {"ok":true,"tz":"Europe/Brussels","busy":[{"start":"2026-10-07T09:00","end":"2026-10-07T10:30"}]}
   ```

2. Crie um evento de teste na agenda do cliente, espere 2 minutos e recarregue a URL: o intervalo novo deve aparecer.
3. Crie um evento de **dia inteiro**: ele aparece como `T00:00` de um dia até `T00:00` do dia seguinte.
4. Confira que nenhum título de evento aparece na resposta.
5. Se você usar a opção "Mostrar como: Disponível" em algum evento, confira que ele **não** aparece. Se aparecer, trate todo evento como ocupado e avise o cliente.

`"ok": false` significa que o script falhou (agenda não encontrada, permissão retirada). Veja o erro em **Execuções**, no menu lateral do Apps Script. Enquanto isso o site mostra todos os horários como disponíveis.

## 3. Ligar o site ao script

1. Em `config.js`, cole a URL em `availabilityUrl`:

   ```js
   availabilityUrl: "https://script.google.com/macros/s/XXXXXXXX/exec",
   ```

2. Troque o `?v=` do `config.js` em **todas** as páginas (`index.html`, `curso.html`, `legal.html`) e suba os arquivos.
3. Abra o site, clique em **Agendar** e veja se os horários do evento de teste aparecem riscados e se o dia inteiro fica desabilitado.

## 4. Como o site usa a resposta

- A busca acontece quando o modal de agendamento abre. O resultado vale por 5 minutos na mesma visita.
- Cada horário do site dura `slotMinutes` (30 min, em `config.js`). Um horário fica indisponível se encostar em qualquer intervalo ocupado.
- Um dia sem nenhum horário livre fica desabilitado no calendário.
- Se a URL estiver vazia, a busca falhar ou demorar mais de 8 segundos, todos os horários aparecem como disponíveis. A confirmação final continua sendo do cliente, pelo WhatsApp.
- Uma mudança na agenda leva até 2 minutos para aparecer (cache do script, `CACHE_SECONDS`).

## 5. Configurações do script

No topo de `disponibilidade.gs`:

| Constante | Padrão | O que faz |
|---|---|---|
| `CALENDAR_ID` | `'primary'` | Agenda lida. Para uma agenda separada, cole o ID dela (Google Agenda > Configurações da agenda > **ID da agenda**). |
| `DAYS_AHEAD` | `90` | Quantos dias à frente. Mantenha igual a `daysAhead` em `config.js`. |
| `TZ` | `'Europe/Brussels'` | Fuso dos horários devolvidos. |
| `CACHE_SECONDS` | `120` | Tempo de cache da resposta. |

Com uma agenda separada, os compromissos pessoais do cliente deixam de bloquear o site. É a opção mais segura se ele usa a agenda principal para tudo.

## 6. Atualizar o script no futuro

1. Edite o código no projeto do cliente e salve.
2. **Implantar** > **Gerenciar implantações** > lápis (Editar) > em **Versão** escolha **Nova versão** > **Implantar**.

Assim a URL continua a mesma. Se você usar **Nova implantação**, a URL muda e precisa ser trocada em `config.js`.

## 7. Reserva automática "PENDENTE" — não implementada

O site não cria eventos na agenda. Motivos:

- O site é estático e o endereço do script é público. Qualquer pessoa ou robô poderia chamar esse endereço e bloquear a agenda inteira do cliente, sem passar pelo formulário.
- O pedido só existe de verdade quando a pessoa envia a mensagem no WhatsApp. Quem desiste nessa etapa deixaria um horário preso.
- O script precisaria de permissão de **escrita** na agenda do cliente. Hoje ele só lê.

Para fazer com segurança seria preciso limite de pedidos, expiração automática dos pendentes e alguma proteção contra robôs. Enquanto isso, o cliente bloqueia o horário criando o evento quando confirma o atendimento (está no guia dele).
