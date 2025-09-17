/***** CONFIG *****/
const SPREADSHEET_ID = '1IPdKrnnQsUYqyZQx6CoLQIyRk6_KAjO4aGP-Jfjst4Q';
const SHEET_NAME     = 'Sheet1';
const HEADERS        = ['Name','Contact','Purpose','Budget','Message','Timestamp'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    if (!e) return json({success:false, error:'No event payload. Use Web App URL with HTTP POST.'});
    lock.tryLock(30000);

    // 1) Sheet
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    ensureHeaders(sheet, HEADERS);

    // 2) Parse body robustly
    var data = {};
    var body = (e.postData && typeof e.postData.contents === 'string') ? e.postData.contents : '';
    var type = (e.postData && e.postData.type || '').toLowerCase();

    // Try JSON if type says json OR body starts with { or [
    if (type.indexOf('application/json') > -1 || /^\s*[\{\[]/.test(body)) {
      try { data = JSON.parse(body || '{}'); } catch (_) {}
    }
    // Fallback to form params
    if (!Object.keys(data).length) data = e.parameter || {};

    // 3) Normalize keys (handle Name/name, phone/contact, msg/message, etc.)
    function pick(obj, arr, def){ for (var k of arr){ if (obj[k]!=null && String(obj[k]).trim()!=='') return String(obj[k]); } return def; }

    var name    = pick(data, ['name','Name','fullName','FullName','fullname'], '');
    var contact = pick(data, ['contact','Contact','phone','Phone','mobile','Mobile','whatsapp','WhatsApp'], '');
    var purpose = pick(data, ['purpose','Purpose','reason','Reason','subject','Subject'], '');
    var budget  = pick(data, ['budget','Budget','price','Price','amount','Amount'], '');
    var message = pick(data, ['message','Message','msg','Msg','notes','Notes'], '');

    // 4) IST timestamp (last col)
    var ts = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');

    // 5) Append in exact A..F order
    var row = [name, contact, purpose, budget, message, ts];
    sheet.getRange(sheet.getLastRow() + 1, 1, 1, 6).setValues([row]);

    return json({success:true});
  } catch (error) {
    // Debug row (doesn't disturb columns)
    try {
      var sh = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME) || SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];
      var ts2 = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm:ss');
      sh.getRange(sh.getLastRow() + 1, 1, 1, 6).setValues([['ERROR', String(error), '', '', '', ts2]]);
    } catch (_) {}
    return json({success:false, error:String(error)});
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
  } else {
    var current = sheet.getRange(1,1,1,headers.length).getValues()[0];
    if (headers.join('|') !== current.join('|')) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.setFrozenRows(1);
    }
  }
}

function doGet(e) {
  return ContentService.createTextOutput('BL handler OK').setMimeType(ContentService.MimeType.TEXT);
}
function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
