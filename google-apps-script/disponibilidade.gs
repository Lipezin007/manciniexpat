/**
 * Mancini Expat — horários ocupados da Google Agenda
 * ---------------------------------------------------------------------------
 * Este script é instalado na conta Google do CLIENTE (a conta da empresa).
 * Ele lê a agenda dessa conta e devolve ao site, em JSON, somente os intervalos
 * OCUPADOS dos próximos dias: início e fim, mais nada.
 *
 * Privacidade: títulos, descrições, locais e convidados dos eventos NUNCA saem
 * daqui. Intervalos que se encostam ou se sobrepõem são unidos antes do envio,
 * então nem a quantidade de eventos fica visível.
 *
 * Instalação e atualização: ver GUIA-INSTALACAO.md.
 */

// ===== Configuração =====
// 'primary' = agenda principal da conta. Para usar uma agenda separada só de atendimentos,
// cole aqui o ID dela (Google Agenda > Configurações da agenda > "ID da agenda").
const CALENDAR_ID = 'primary';
const DAYS_AHEAD = 90;              // mesmo valor de CONFIG.daysAhead no site
const TZ = 'Europe/Brussels';       // todos os horários são devolvidos no horário de Bruxelas
const CACHE_SECONDS = 120;          // o resultado fica guardado por 2 minutos para a resposta ser rápida

// ===== Endereço público (o site chama esta função) =====
function doGet() {
  let body;
  try {
    body = { ok: true, tz: TZ, busy: getBusy_(true) };
  } catch (err) {
    // Nunca devolve detalhes do erro. Com a lista vazia, o site mostra todos os horários como disponíveis.
    console.error(err);
    body = { ok: false, tz: TZ, busy: [] };
  }
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

// ===== Teste manual: selecione "testar" no editor e clique em Executar =====
function testar() {
  const busy = getBusy_(false);
  console.log('Agenda: ' + getCalendar_().getName());
  console.log('Intervalos ocupados nos próximos ' + DAYS_AHEAD + ' dias: ' + busy.length);
  console.log(JSON.stringify(busy.slice(0, 10), null, 2));
}

function getCalendar_() {
  const cal = CALENDAR_ID === 'primary' ? CalendarApp.getDefaultCalendar() : CalendarApp.getCalendarById(CALENDAR_ID);
  if (!cal) throw new Error('Agenda não encontrada: ' + CALENDAR_ID);
  return cal;
}

/** Devolve [{ start: "2026-10-07T09:00", end: "2026-10-07T10:30" }, ...] no horário de Bruxelas. */
function getBusy_(useCache) {
  const cache = CacheService.getScriptCache();
  if (useCache) {
    const hit = cache.get('busy');
    if (hit) return JSON.parse(hit);
  }

  const from = new Date();
  const to = new Date(from.getTime() + (DAYS_AHEAD + 1) * 24 * 60 * 60 * 1000);
  const scriptTz = Session.getScriptTimeZone();
  const list = [];

  getCalendar_().getEvents(from, to).forEach(function (ev) {
    if (isFree_(ev)) return;
    if (ev.isAllDayEvent()) {
      // Dia inteiro: bloqueia de 00:00 do primeiro dia até 00:00 do dia seguinte ao último.
      // As datas de eventos de dia inteiro vêm no fuso do script, por isso são formatadas nele.
      list.push({
        start: Utilities.formatDate(ev.getAllDayStartDate(), scriptTz, 'yyyy-MM-dd') + 'T00:00',
        end: Utilities.formatDate(ev.getAllDayEndDate(), scriptTz, 'yyyy-MM-dd') + 'T00:00'
      });
    } else {
      list.push({
        start: Utilities.formatDate(ev.getStartTime(), TZ, "yyyy-MM-dd'T'HH:mm"),
        end: Utilities.formatDate(ev.getEndTime(), TZ, "yyyy-MM-dd'T'HH:mm")
      });
    }
  });

  const busy = merge_(list);
  try { cache.put('busy', JSON.stringify(busy), CACHE_SECONDS); } catch (err) { /* lista grande demais para o cache: segue sem */ }
  return busy;
}

/** Eventos que não ocupam horário: convites recusados e eventos marcados como "Disponível". */
function isFree_(ev) {
  try {
    if (ev.getMyStatus() === CalendarApp.GuestStatus.NO) return true;
    if (ev.getTransparency() === CalendarApp.EventTransparency.TRANSPARENT) return true;
  } catch (err) { /* na dúvida, conta como ocupado */ }
  return false;
}

/** Une intervalos que se encostam ou se sobrepõem. O formato de texto permite comparar como string. */
function merge_(list) {
  list.sort(function (a, b) { return a.start < b.start ? -1 : a.start > b.start ? 1 : 0; });
  const out = [];
  list.forEach(function (cur) {
    if (!(cur.start < cur.end)) return;
    const last = out[out.length - 1];
    if (last && cur.start <= last.end) { if (cur.end > last.end) last.end = cur.end; }
    else out.push({ start: cur.start, end: cur.end });
  });
  return out;
}
