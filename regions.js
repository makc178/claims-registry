/* Эверест: нормализация субъектов РФ на чтении (страховка; основная нормализация — в build_lots.py/build_property.py).
   Логика = /workspace/claims_app_data/regions_norm.py, справочник = claims_app_data/config/regions.json (вставляется при сборке). */
(function(){
var C={"version":"2026-10-16","unknown":"Не определён","type_words":["область","обл","край","республика","республики","республике","респ","ао","автономный","автономная","округ","город","г","федерации","федерация"],"subjects":[{"code":"01","name":"Республика Адыгея","stems":["адыге"]},{"code":"02","name":"Республика Башкортостан","stems":["башкортостан","башкир"]},{"code":"03","name":"Республика Бурятия","stems":["бурят"]},{"code":"04","name":"Республика Алтай","stems":[],"aliases":["республикаалтай","республикиалтай","алтайреспублика","респалтай","горныйалтай"]},{"code":"05","name":"Республика Дагестан","stems":["дагестан"]},{"code":"06","name":"Республика Ингушетия","stems":["ингуш"]},{"code":"07","name":"Кабардино-Балкарская Республика","stems":["кабардин","балкарск"]},{"code":"08","name":"Республика Калмыкия","stems":["калмык"]},{"code":"09","name":"Карачаево-Черкесская Республика","stems":["карачаев","черкесск"]},{"code":"10","name":"Республика Карелия","stems":["карели","карельск"]},{"code":"11","name":"Республика Коми","stems":["коми"],"exact_word":true},{"code":"12","name":"Республика Марий Эл","stems":["марий"]},{"code":"13","name":"Республика Мордовия","stems":["мордов"]},{"code":"14","name":"Республика Саха (Якутия)","stems":["саха","якути","якутск"],"exact_word":true},{"code":"15","name":"Республика Северная Осетия — Алания","stems":["осети","алания"]},{"code":"16","name":"Республика Татарстан","stems":["татарстан","татарск"]},{"code":"17","name":"Республика Тыва","stems":["тыва","тувинск"],"exact_word":true},{"code":"18","name":"Удмуртская Республика","stems":["удмурт"]},{"code":"19","name":"Республика Хакасия","stems":["хакас"]},{"code":"20","name":"Чеченская Республика","stems":["чеченск","чечня"]},{"code":"21","name":"Чувашская Республика — Чувашия","stems":["чуваш"]},{"code":"22","name":"Алтайский край","stems":["алтайск"]},{"code":"23","name":"Краснодарский край","stems":["краснодар","кубан"]},{"code":"24","name":"Красноярский край","stems":["красноярск"]},{"code":"25","name":"Приморский край","stems":["приморск"]},{"code":"26","name":"Ставропольский край","stems":["ставропол"]},{"code":"27","name":"Хабаровский край","stems":["хабаровск","хаб"],"exact_word_stems":["хаб"]},{"code":"28","name":"Амурская область","stems":["амурск"]},{"code":"29","name":"Архангельская область","stems":["архангельск"]},{"code":"30","name":"Астраханская область","stems":["астрахан"]},{"code":"31","name":"Белгородская область","stems":["белгород"]},{"code":"32","name":"Брянская область","stems":["брянск"]},{"code":"33","name":"Владимирская область","stems":["владимирск"]},{"code":"34","name":"Волгоградская область","stems":["волгоград"]},{"code":"35","name":"Вологодская область","stems":["вологод"]},{"code":"36","name":"Воронежская область","stems":["воронеж"]},{"code":"37","name":"Ивановская область","stems":["ивановск"]},{"code":"38","name":"Иркутская область","stems":["иркутск"]},{"code":"39","name":"Калининградская область","stems":["калининград"]},{"code":"40","name":"Калужская область","stems":["калужск","калуга"]},{"code":"41","name":"Камчатский край","stems":["камчат"]},{"code":"42","name":"Кемеровская область — Кузбасс","stems":["кемеров","кузбасс"]},{"code":"43","name":"Кировская область","stems":["кировск"],"not_followed_by":["оград"]},{"code":"44","name":"Костромская область","stems":["костром"]},{"code":"45","name":"Курганская область","stems":["курганск"]},{"code":"46","name":"Курская область","stems":["курск"],"exact_word_stems":["курск","курская","курской"]},{"code":"47","name":"Ленинградская область","stems":["ленинградск"]},{"code":"48","name":"Липецкая область","stems":["липецк"]},{"code":"49","name":"Магаданская область","stems":["магадан"]},{"code":"50","name":"Московская область","stems":["московск","подмосков"]},{"code":"51","name":"Мурманская область","stems":["мурманск"]},{"code":"52","name":"Нижегородская область","stems":["нижегород","горьковск"]},{"code":"53","name":"Новгородская область","stems":["новгородск"]},{"code":"54","name":"Новосибирская область","stems":["новосибирск"]},{"code":"55","name":"Омская область","stems":["омск"],"exact_word_stems":["омск","омская","омской"]},{"code":"56","name":"Оренбургская область","stems":["оренбург"]},{"code":"57","name":"Орловская область","stems":["орловск"]},{"code":"58","name":"Пензенская область","stems":["пензен"]},{"code":"59","name":"Пермский край","stems":["пермск"]},{"code":"60","name":"Псковская область","stems":["псковск"]},{"code":"61","name":"Ростовская область","stems":["ростовск"]},{"code":"62","name":"Рязанская область","stems":["рязан"]},{"code":"63","name":"Самарская область","stems":["самарск","куйбышевск"]},{"code":"64","name":"Саратовская область","stems":["саратов"]},{"code":"65","name":"Сахалинская область","stems":["сахалин"]},{"code":"66","name":"Свердловская область","stems":["свердловск"]},{"code":"67","name":"Смоленская область","stems":["смоленск"]},{"code":"68","name":"Тамбовская область","stems":["тамбов"]},{"code":"69","name":"Тверская область","stems":["тверск","калининск"]},{"code":"70","name":"Томская область","stems":["томск"],"exact_word_stems":["томск","томская","томской"]},{"code":"71","name":"Тульская область","stems":["тульск"]},{"code":"72","name":"Тюменская область","stems":["тюмен"]},{"code":"73","name":"Ульяновская область","stems":["ульяновск"]},{"code":"74","name":"Челябинская область","stems":["челябинск"]},{"code":"75","name":"Забайкальский край","stems":["забайкаль","читинск"]},{"code":"76","name":"Ярославская область","stems":["ярославск"]},{"code":"77","name":"г. Москва","stems":["москва","москвы","москве"],"exact_word_stems":["москва","москвы","москве"]},{"code":"78","name":"г. Санкт-Петербург","stems":["петербург","ленинград"],"exact_word_stems":["ленинград"]},{"code":"79","name":"Еврейская автономная область","stems":["еврейск"]},{"code":"83","name":"Ненецкий автономный округ","stems":["ненецк"]},{"code":"86","name":"Ханты-Мансийский автономный округ — Югра","stems":["ханты","мансийск","югра","югры"]},{"code":"87","name":"Чукотский автономный округ","stems":["чукот"]},{"code":"89","name":"Ямало-Ненецкий автономный округ","stems":["ямал"]},{"code":"91","name":"Республика Крым","stems":["крым"]},{"code":"92","name":"г. Севастополь","stems":["севастопол"]},{"code":"93","name":"Донецкая Народная Республика","stems":["донецк","днр"]},{"code":"94","name":"Луганская Народная Республика","stems":["луганск","ворошиловградск","лнр"]},{"code":"90","name":"Запорожская область","stems":["запорож"]},{"code":"95","name":"Херсонская область","stems":["херсон"]}],"city_hints":{"нефтеюганск":"86","сургут":"86","нижневартовск":"86","когалым":"86","нягань":"86","муравленко":"89","новыйуренгой":"89","ноябрьск":"89","салехард":"89","норильск":"24","сочи":"23","тольятти":"63","екатеринбург":"66","новокузнецк":"42","магнитогорск":"74"},"foreign":["казахстан","казахтан","казах","узбекистан","армени","армянск","азербайджан","азербйджан","кыргыз","киргиз","таджик","грузи","корея","украин","целиноград","кустанай","джезказган","джезкаган","джезканган","карагандин","алматин","атинск","павлодар","семипалатин","гурьевск","кокчетав","джамбул","ординск","уральская","уральской","ташкент","ташкенск","самарканд","бухарск","хорезм","сырдарьин","дарьинск","андижан","ленинабад","ленинобад","хатлон","ошская","чарджоу","закарпат","кировоград","полтав","харьков","николаевск","днепропетров","франковск","белорус","беларус","молдав"],"noise":["залог","залоге","залогодержатель","ориентир","положением","представитель","местонахождение","местоположение","адрес","федерация","российская"],"aliases":{},"court_codes":{"А01":"01","А02":"04","А03":"22","А04":"28","А05":"29","А05П":"83","А06":"30","А07":"02","А08":"31","А09":"32","А10":"03","А11":"33","А12":"34","А13":"35","А14":"36","А15":"05","А16":"79","А17":"37","А18":"06","А19":"38","А20":"07","А21":"39","А22":"08","А23":"40","А24":"41","А25":"09","А26":"10","А27":"42","А28":"43","А29":"11","А31":"44","А32":"23","А33":"24","А34":"45","А35":"46","А36":"48","А37":"49","А38":"12","А39":"13","А40":"77","А41":"50","А42":"51","А43":"52","А44":"53","А45":"54","А46":"55","А47":"56","А48":"57","А49":"58","А50":"59","А50П":"59","А51":"25","А52":"60","А53":"61","А54":"62","А55":"63","А56":null,"А57":"64","А58":"14","А59":"65","А60":"66","А61":"15","А62":"67","А63":"26","А64":"68","А65":"16","А66":"69","А67":"70","А68":"71","А69":"17","А70":"72","А71":"18","А72":"73","А73":"27","А74":"19","А75":"86","А76":"74","А77":"20","А78":"75","А79":"21","А80":"87","А81":"89","А82":"76","А83":"91","А84":"92","А85":"93","А86":"90","А87":"94","А88":"95"},"inn_legacy_codes":{"80":"75","81":"59","82":"41","84":"24","85":"38","88":"24"},"flags":{"spb_lo_combined":false},"combined":{"А56":{"name":"Санкт-Петербург и Ленинградская область","label":"СПб и ЛО (по суду)","members":["78","47"]}},"court_code_sources":{"base":"Пост. Пленума ВАС РФ от 25.12.2013 №100, прил. 1 (consultant.ru/document/cons_doc_LAW_159645/8a0d08f3ee356bf0f266e1cb55eaa05df03b9468/)","А85":"https://sudact.ru/arbitral/doc/SM9QSmxIiOoR/ — Арбитражный суд Донецкой Народной Республики, дело № А85-2401/2025 (проверено 16.10.2026)","А86":"https://sudact.ru/arbitral/doc/H6EFg7hDhCUE/ — Арбитражный суд Запорожской области, дело № А86-724/2025 (проверено 16.10.2026)","А87":"https://www.zakonrf.info/arbsud/as-luganskoi-narodnoi-respubliki/ — АС Луганской Народной Республики, дела № А87-… (проверено 16.10.2026)","А88":"https://www.zakonrf.info/arbsud/as-khersonskoi-oblasti/ — АС Херсонской области, дела № А88-… (проверено 16.10.2026)"}};if(!C){window.normRegion=function(v){return v==null?'':String(v)};return}
function low(s){return String(s).replace(/ё/g,'е').replace(/Ё/g,'Е').replace(/\s+/g,' ').trim().toLowerCase()}
function sq(s){return low(s).replace(/[^a-zа-я]/g,'')}
var BY={},NAMES={},AL={},TW={};C.subjects.forEach(function(s){BY[s.code]=s;NAMES[sq(s.name)]=s.name;(s.aliases||[]).forEach(function(a){AL[sq(a)]=s.name})});
Object.keys(C.aliases||{}).forEach(function(a){AL[sq(a)]=C.aliases[a]});C.type_words.forEach(function(w){TW[w]=1});
function sw(w,p){return w.slice(0,p.length)===p}
function words(s){s=low(s).replace(/([а-я])-\s*(?=(?:ск|ская|ской|ский|лия|ия)(?![а-я]))/g,'$1');return (s.match(/[a-zа-я]+(?:-[a-zа-я]+)*/g)||[]).map(function(t){return t.match(/[a-zа-я]+/g)})}
function hit(s,w){var ex=s.exact_word_stems||[];if(ex.indexOf(w)>=0)return true;
 for(var i=0;i<s.stems.length;i++){var st=s.stems[i];if(ex.indexOf(st)>=0)continue;
  if(s.exact_word){if(sw(w,st)&&w.length<=st.length+2)return true}
  else if(sw(w,st)&&!(s.not_followed_by||[]).some(function(x){return sw(w.slice(st.length),x)}))return true}return false}
function match(W){var cand=[],flat=[];W.forEach(function(x){flat=flat.concat(x)});
 W.forEach(function(parts,i){var adj=(i>0&&TW[W[i-1][W[i-1].length-1]])||(i+1<W.length&&TW[W[i+1][0]]),r=null;
  for(var k=0;k<parts.length&&!r;k++){var w=parts[k];
   if(Object.prototype.hasOwnProperty.call(C.city_hints,w)){r=[3,BY[C.city_hints[w]].name];break}
   if(C.foreign.some(function(f){return sw(w,f)})){r=[adj?2:1,null];break}
   for(var j=0;j<C.subjects.length;j++)if(hit(C.subjects[j],w)){r=[adj?2:1,C.subjects[j].name];break}}
  if(r)cand.push([r[0],i,r[1]])});
 var J=' '+flat.join(' ')+' ';if(/ (республик[а-я]*|респ) алтай | алтай (республик[а-я]*|респ) /.test(J))cand.push([3,0,BY['04'].name]);
 if(!cand.length)return false;var b=Math.max.apply(null,cand.map(function(x){return x[0]})),top=cand.filter(function(x){return x[0]===b});
 var u=top.map(function(x){return x[2]}).filter(function(v,i,a){return a.indexOf(v)===i});return u.length===1?u[0]:top[top.length-1][2]}
/* difflib.SequenceMatcher.ratio (Ratcliff/Obershelp) */
function mb(a,b){var best=[0,0,0];for(var i=0;i<a.length;i++)for(var j=0;j<b.length;j++){var k=0;while(i+k<a.length&&j+k<b.length&&a[i+k]===b[j+k])k++;if(k>best[2])best=[i,j,k]}return best}
function M(a,b){if(!a.length||!b.length)return 0;var m=mb(a,b);if(!m[2])return 0;return m[2]+M(a.slice(0,m[0]),b.slice(0,m[1]))+M(a.slice(m[0]+m[2]),b.slice(m[1]+m[2]))}
function ratio(a,b){return a.length+b.length?2*M(a,b)/(a.length+b.length):1}
var STEMS=[];C.subjects.forEach(function(s){s.stems.forEach(function(st){if(st.length>=5)STEMS.push([st,s.name])})});
function fuzzy(W){var fl=[];W.forEach(function(x){fl=fl.concat(x)});for(var i=0;i<fl.length;i++){var w=fl[i];if(w.length<6||TW[w])continue;
 for(var j=0;j<STEMS.length;j++)if(ratio(w.slice(0,STEMS[j][0].length+1),STEMS[j][0])>=0.86)return STEMS[j][1]}return false}
var CACHE={},CB=Object.keys(C.combined||{}).map(function(k){return C.combined[k]});
function norm(v){if(v==null)return '';var s=String(v).trim();if(!s||/^(none|null|н\/д|-|—)$/i.test(s))return '';if(s===C.unknown)return s;if(CB.some(function(x){return x.name===s}))return s;
 if(CACHE[s]!==undefined)return CACHE[s];var q=sq(s),r=NAMES[q]||AL[q];if(!r){var W=words(s);r=match(W);if(r===false)r=fuzzy(W);r=r||C.unknown}return CACHE[s]=r}
window.normRegion=norm;window.REG_UNKNOWN=C.unknown;
/* единая цепочка (как resolve_region в regions_norm.py): поле → индекс суда → адрес должника → КПП (только ЮЛ) → ИНН должника → [А56 при флаге] → «Не определён».
   Возвращает {name, label?, members?}; флаг: regions.json flags.spb_lo_combined или EV_CFG.regions.spb_lo_combined */
var NM={};C.subjects.forEach(function(s){NM[s.name]=1});
function ckey(court,cs){var v=[court,cs];for(var i=0;i<2;i++){var m=/^\s*[АA]\s?(\d{2})(П)?(?!\d)/i.exec(String(v[i]||''));if(m)return 'А'+m[1]+(m[2]?'П':'')}return null}
function fromInn(inn){var d=String(inn||'').replace(/\D/g,'');if((d.length!==10&&d.length!==12)||/^0+$/.test(d))return '';var k=d.slice(0,2);k=(C.inn_legacy_codes||{})[k]||k;return BY[k]?BY[k].name:''}
window.regionFromInn=fromInn;
function fromKpp(kpp){var d=String(kpp||'').replace(/\D/g,'');if(d.length!==9||/^0+$/.test(d))return '';var k=d.slice(0,2);k=(C.inn_legacy_codes||{})[k]||k;return BY[k]?BY[k].name:''}
function isPerson(t){t=String(t==null?'':t).trim().toLowerCase();return !!t&&(t.indexOf('фл')===0||t.indexOf('ип')===0||t.indexOf('физ')>=0||t.indexOf('person')>=0||t.indexOf('пул фл')>=0)}
window.regionFromKpp=fromKpp;
window.resolveRegion=function(o){o=o||{};if(![o.region,o.court,o['case'],o.inn,o.address,o.kpp].some(function(x){return String(x==null?'':x).trim()}))return {name:''};
 var r=norm(o.region);if(NM[r])return {name:r};var k=ckey(o.court,o['case']);
 if(k){r=window.regionFromCourt(o.court,o['case']);if(NM[r])return {name:r}}else if(o.court){r=norm(o.court);if(NM[r])return {name:r}}
 r=o.address?norm(o.address):'';if(NM[r])return {name:r};if(!isPerson(o.type)){r=fromKpp(o.kpp);if(r)return {name:r}}r=fromInn(o.inn);if(r)return {name:r};
 var EC=(window.EV_CFG||{}).regions||{},on=EC.spb_lo_combined!=null?!!EC.spb_lo_combined:!!(C.flags||{}).spb_lo_combined,cb=(C.combined||{})[k||''];
 if(on&&cb)return {name:cb.name,label:cb.label,members:cb.members.map(function(c){return BY[c].name})};return {name:C.unknown}};
/* индекс арбитражного суда («А04», дело «А04-123/2025») → субъект; неизвестный или двойной (А56) → «Не определён»; кода нет → прежнее значение */
window.regionFromCourt=function(court,cs){var CC=C.court_codes||{},m=null,v=[court,cs];for(var i=0;i<2&&!m;i++)m=/^\s*[АA]\s?(\d{2})(П)?(?!\d)/i.exec(String(v[i]||''));
 if(!m)return court?norm(court)||null:null;var k='А'+m[1]+(m[2]?'П':''),c=Object.prototype.hasOwnProperty.call(CC,k)?CC[k]:(m[2]?CC['А'+m[1]]:undefined);return c&&BY[c]?BY[c].name:C.unknown};
})();

/* Эверест: общий компонент удаления файлов («Отчёты», «Оценка»).
   База: серая корзина в строке + диалог с именем файла («Удалить» красная, «Отмена»).
   Флаги дизайнера (EV_CFG.delete), по умолчанию ВЫКЛ до одобрения пользователем:
   hover_red — корзина краснеет при наведении; swipe_mobile — свайп влево на телефоне (с подтверждением);
   undo_toast — тост «Файл удалён · Вернуть» на undo_ms, удаление в хранилище откладывается; незавершённое
   (закрыли страницу) — в localStorage 'ev.del.pending', дозавершается при следующем открытии с уведомлением. */
(function(){
var CFG=window.EV_CFG=window.EV_CFG||{};
CFG.delete=Object.assign({hover_red:false,swipe_mobile:false,undo_toast:false,undo_ms:5000},CFG.delete||{});
if(CFG.val_autofav===undefined)CFG.val_autofav=true;   // «Запросить оценку» в «Торгах» → лот в «Избранное»
var D=CFG.delete,LSK='ev.del.pending',KINDS={},PEND={},T={};
function g(n){try{return (0,eval)(n)}catch(e){return undefined}}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function load(){try{var a=JSON.parse(localStorage.getItem(LSK)||'[]');return Array.isArray(a)?a:[]}catch(e){return []}}
function save(){try{var a=Object.keys(PEND).map(function(k){return PEND[k]});a.length?localStorage.setItem(LSK,JSON.stringify(a)):localStorage.removeItem(LSK)}catch(e){}}
load().forEach(function(o){if(o&&o.key)PEND[o.key]=o});
var css=document.createElement('style');css.textContent=
'.evdel{background:transparent!important;border:0!important;box-shadow:none!important;padding:4px 6px!important;margin:0;cursor:pointer;color:var(--mut,#8a93a3)!important;opacity:.85;display:inline-flex;align-items:center;width:auto!important;min-width:0!important}'+
'.evdel svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}.evdel:focus-visible{outline:2px solid var(--acc,#6aa0ff)}'+
'html.evdel-hr .evdel:hover,html.evdel-hr .evdel:focus-visible{color:#e5484d!important;opacity:1}'+
'#evdelm{position:fixed;inset:0;z-index:150;background:rgba(0,0,0,.45);display:flex;align-items:center;justify-content:center;padding:16px}'+
'#evdelm .bx{background:var(--pan,#1c2e52);color:var(--ink,#f2f2f2);border-radius:12px;max-width:440px;width:100%;padding:16px 18px;box-shadow:0 8px 30px rgba(0,0,0,.4)}'+
'#evdelm .fn{word-break:break-all;margin:6px 0 2px;font-weight:600}#evdelm .bt{display:flex;gap:8px;justify-content:flex-end;margin-top:14px}'+
'#evdelm .ok{background:#e5484d!important;color:#fff!important;border:0}#evdelm .no{background:transparent!important;color:var(--ink,#f2f2f2)!important;border:1px solid var(--line,#5a6a85)}'+
'#evdelt{position:fixed;left:50%;transform:translateX(-50%);bottom:max(16px,env(safe-area-inset-bottom));z-index:151;background:#1f3354;color:#fff;border-radius:10px;padding:10px 14px;box-shadow:0 4px 18px #0005;font-size:14px;display:flex;gap:12px;align-items:center}'+
'#evdelt button{background:transparent;border:0;color:#bcd3ff;text-decoration:underline;font:inherit;cursor:pointer;padding:0}'+
'.evsw{transition:transform .15s}.evsw.evsw-on{background:rgba(229,72,77,.12)}';
document.head.appendChild(css);
if(D.hover_red)document.documentElement.classList.add('evdel-hr');
var ICON='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>';
/* HTML кнопки-корзины. key — уникальный ключ строки, kind — тип операции, name — имя файла для диалога. */
function icon(kind,key,name){return '<button type="button" class="evdel" data-evdel="'+esc(kind)+'" data-evkey="'+esc(key)+'" data-evnm="'+esc(name)+'" title="Удалить" aria-label="Удалить '+esc(name)+'">'+ICON+'</button>'}
function ro(){var t=g('TOKEN'),fr=g('FAVRO');return !t||fr===true}
function toast(m,ms){var f=g('toast');if(f)f(m,ms||6000)}
function ask(name,files){return new Promise(function(res){var m=document.createElement('div');m.id='evdelm';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');
 m.innerHTML='<div class="bx"><b>Удалить файл?</b><div class="fn">'+esc(name)+'</div>'+(files&&files.length>1?'<div class="sm">Будут удалены: '+files.map(esc).join(', ')+'</div>':'')+'<div class="sm">Исходные данные (лот, запрос) не удаляются.</div><div class="bt"><button type="button" class="lbtn no">Отмена</button><button type="button" class="lbtn ok">Удалить</button></div></div>';
 function done(v){document.removeEventListener('keydown',kd,true);m.remove();res(v)}function kd(e){if(e.key==='Escape'){e.preventDefault();done(false)}}
 m.addEventListener('click',function(e){if(e.target===m||e.target.closest('.no'))done(false);else if(e.target.closest('.ok'))done(true)});document.addEventListener('keydown',kd,true);document.body.appendChild(m);m.querySelector('.no').focus()})}
function fire(op,ok,err){document.dispatchEvent(new CustomEvent('evdel:'+(ok?'done':'restore'),{detail:{op:op,error:err}}))}
async function commit(key){var op=PEND[key];if(!op)return;clearTimeout(T[key]);delete T[key];var k=KINDS[op.kind];if(!k)return; // исполнитель ещё не зарегистрирован — останется в очереди
 try{await k(op);delete PEND[key];save();fire(op,true);toast('Удалено: '+esc(op.name),5000)}
 catch(e){op.err=String(e.message||e);op.tries=(op.tries||0)+1;save();toast('Не удалось удалить '+esc(op.name)+': '+esc(op.err)+'. Повторю при следующем открытии.',9000);fire(op,false,op.err)}}
function undoToast(op){var t=document.getElementById('evdelt');if(t)t.remove();t=document.createElement('div');t.id='evdelt';t.setAttribute('role','status');
 t.innerHTML='<span>Файл удалён</span><button type="button">Вернуть</button>';document.body.appendChild(t);
 t.querySelector('button').onclick=function(){clearTimeout(T[op.key]);delete T[op.key];delete PEND[op.key];save();t.remove();fire(op,false);toast('Файл возвращён: '+esc(op.name),4000)};
 T[op.key]=setTimeout(function(){t.remove();commit(op.key)},+D.undo_ms||5000)}
/* Запуск удаления по кнопке/свайпу. op: {kind,key,name,files?,...данные для исполнителя} */
async function start(op){if(ro()){toast('Удаление недоступно: ключ только для чтения.',6000);return}
 if(!KINDS[op.kind])return;if(!(await ask(op.name,op.files)))return;op.at=Date.now();PEND[op.key]=op;save();
 document.dispatchEvent(new CustomEvent('evdel:hide',{detail:{op:op}}));
 if(D.undo_toast)undoToast(op);else commit(op.key)}
function pending(key){return !!PEND[key]}
function kind(name,fn){KINDS[name]=fn;Object.keys(PEND).forEach(function(k){var o=PEND[k];if(o.kind===name&&!T[k]){ // дозавершение после закрытия страницы
  T[k]=setTimeout(function(){if(!g('TOKEN'))return delete T[k];toast('Завершаю удаление, начатое ранее: '+esc(o.name),6000);commit(k)},1500)}})}
/* свайп влево на телефоне (флаг swipe_mobile) — для строк с [data-evrow], внутри которых есть .evdel */
if(D.swipe_mobile&&matchMedia('(pointer:coarse)').matches){var sx=0,sy=0,row=null;
 document.addEventListener('touchstart',function(e){row=e.target.closest&&e.target.closest('[data-evrow]');if(!row||!row.querySelector('.evdel'))return row=null;sx=e.touches[0].clientX;sy=e.touches[0].clientY;row.classList.add('evsw')},{passive:true});
 document.addEventListener('touchmove',function(e){if(!row)return;var dx=e.touches[0].clientX-sx,dy=e.touches[0].clientY-sy;if(Math.abs(dy)>Math.abs(dx)){row.style.transform='';return}if(dx<0){row.style.transform='translateX('+Math.max(dx,-90)+'px)';row.classList.toggle('evsw-on',dx<-70)}},{passive:true});
 document.addEventListener('touchend',function(e){if(!row)return;var r=row,dx=(e.changedTouches[0]||{}).clientX-sx;r.style.transform='';r.classList.remove('evsw-on');row=null;if(dx<-70){var b=r.querySelector('.evdel');if(b)b.click()}},{passive:true})}
/* состояние при закрытии страницы: очередь уже в localStorage; дописываем момент, чтобы при открытии не потерять */
addEventListener('pagehide',function(){Object.keys(T).forEach(function(k){if(PEND[k])PEND[k].closed_at=Date.now()});save()});
/* общий хелпер для JSON-индексов в закрытом репо: fn(obj)->obj, с повтором при конфликте версий */
async function idxEdit(path,fn){var REPO=g('REPO'),BR=g('BRANCH'),H=g('ghH'),U=g('u8b64'),B=g('b64');
 for(var k=0;k<4;k++){var r=await fetch('https://api.github.com/repos/'+REPO+'/contents/'+path+'?ref='+BR+'&_='+Date.now(),{headers:H(),cache:'no-store'});if(r.status===404)return;if(!r.ok)throw new Error('index '+r.status);var j=await r.json();
  var o=JSON.parse(new TextDecoder().decode(B(j.content.replace(/\s/g,'')))),n=fn(o);if(n===false)return;
  var p=await fetch('https://api.github.com/repos/'+REPO+'/contents/'+path,{method:'PUT',headers:H(),body:JSON.stringify({message:'index: delete',sha:j.sha,branch:BR,content:U(JSON.stringify(n,null,1))})});
  if(p.ok)return;if(p.status!==409&&p.status!==422)throw new Error('index '+p.status);await new Promise(function(z){setTimeout(z,600)})}throw new Error('конфликт версий '+path)}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('.evdel[data-evdel]');if(!b)return;e.preventDefault();e.stopPropagation();
 var mk=window.EVDel['op_'+b.dataset.evdel];var op=mk?mk(b):{kind:b.dataset.evdel,key:b.dataset.evkey,name:b.dataset.evnm};if(op)start(op)},true);
/* «надгробия» в закрытом репо (deleted.json): id запросов удалённых отчётов/оценок, чтобы запрос не вернулся в «В работе» */
var TOMB=null,TL=null;try{TOMB=JSON.parse(localStorage.getItem('ev.del.tomb')||'null')}catch(e){}
function tombIds(){var o=TOMB||{},s=[];['reports','valuation'].forEach(function(k){var m=o[k]||{};Object.keys(m).forEach(function(n){var r=m[n];(r&&r.request_ids||[]).forEach(function(x){s.push(x)})})});return s}
function tombLoad(){if(TL)return TL;var R=g('ghRaw');if(!R||!g('TOKEN'))return Promise.resolve();TL=R('deleted.json').then(function(t){TOMB=JSON.parse(t);try{localStorage.setItem('ev.del.tomb',t)}catch(e){}}).catch(function(){}).then(function(){setTimeout(function(){TL=null},6e4)});return TL}
async function tombAdd(kind,key,ids){ids=(ids||[]).filter(Boolean);if(!ids.length)return;var REPO=g('REPO'),BR=g('BRANCH'),H=g('ghH'),U=g('u8b64'),B=g('b64');
 for(var k=0;k<4;k++){var r=await fetch('https://api.github.com/repos/'+REPO+'/contents/deleted.json?ref='+BR+'&_='+Date.now(),{headers:H(),cache:'no-store'}),o={},sha;
  if(r.ok){var j=await r.json();sha=j.sha;o=JSON.parse(new TextDecoder().decode(B(j.content.replace(/\s/g,''))))}else if(r.status!==404)throw new Error('deleted.json '+r.status);
  o[kind]=o[kind]||{};o[kind][key]={request_ids:ids,deleted_at:new Date().toISOString()};var b={message:'deleted: '+key,branch:BR,content:U(JSON.stringify(o,null,1))};if(sha)b.sha=sha;
  var p=await fetch('https://api.github.com/repos/'+REPO+'/contents/deleted.json',{method:'PUT',headers:H(),body:JSON.stringify(b)});
  if(p.ok){TOMB=o;try{localStorage.setItem('ev.del.tomb',JSON.stringify(o))}catch(e){}return}if(p.status!==409&&p.status!==422)throw new Error('deleted.json '+p.status);await new Promise(function(z){setTimeout(z,600)})}throw new Error('конфликт версий deleted.json')}
window.EVDel={icon:icon,start:start,kind:kind,pending:pending,idxEdit:idxEdit,tombAdd:tombAdd,tombLoad:tombLoad,tombIds:tombIds,cfg:D,_pend:PEND};
})();
