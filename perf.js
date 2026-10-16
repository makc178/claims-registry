/* Эверест: ускорение «Аналитики» и «В работе». Та же логика pendList (порядок, фильтры, поля), но:
   1) списки requests/ и requests/picked и deleted.json читаются одновременно;
   2) файлы запросов — параллельно (EV_PERF.concurrency), а не по одному;
   3) неизменившийся файл (тот же sha в списке папки) не перечитывается — кэш только в памяти вкладки.
   Настройки: config/perf.json (встраивает build.py). Только Эверест, в Арбитр не попадает. */
(function(){
var C=Object.assign({enabled:true,concurrency:8,cache_by_sha:true},{"enabled":true,"concurrency":8,"cache_by_sha":true},(window.EV_CFG||{}).perf||{});window.EV_PERF=C;
if(!C.enabled||typeof pendList!=='function'||typeof ghApi!=='function'||typeof ghRaw!=='function')return;
var BODY=new Map(),N=Math.max(1,C.concurrency|0||1);
function clone(o){try{return structuredClone(o)}catch(e){return JSON.parse(JSON.stringify(o))}}
async function pool(a,n,fn){var out=new Array(a.length),i=0;async function w(){while(i<a.length){var k=i++;out[k]=await fn(a[k])}}await Promise.all(Array.from({length:Math.min(n,a.length)},w));return out}
async function readQ(f){var c=C.cache_by_sha&&f.sha;if(c&&BODY.has(f.sha))return clone(BODY.get(f.sha));var q={};try{q=JSON.parse(await ghRaw(f.path));if(c)BODY.set(f.sha,clone(q))}catch(e){}return q}
var orig=pendList;
pendList=async function(){
 var ev=(typeof EV_APP!=='undefined'&&EV_APP&&window.EVDel);
 var dirs=[['requests','в очереди'],['requests/picked','в работе']];
 var L=await Promise.all([ev?EVDel.tombLoad():null].concat(dirs.map(async function(d){try{var r=await ghApi(d[0]);if(!r.ok)return [];return (await r.json()).filter(function(x){return x.type==='file'&&x.name.endsWith('.json')}).map(function(f){return {f:f,st:d[1]}})}catch(e){return []}})));
 var done=new Set(Object.values(REPIDX).flatMap(function(x){return x?[x.request_id].concat(x.request_ids||[]):[]}).filter(Boolean).concat(ev?EVDel.tombIds():[]));
 var items=[].concat(L[1],L[2]).filter(function(it){it.id=it.f.name.replace(/\.json$/,'');return !done.has(it.id)});
 return pool(items,N,async function(it){var q=await readQ(it.f);return {id:it.id,path:it.f.path,st:it.st,q:q,n:(q.lots||[]).length||1,pr:q.type==='court_practice',fin:q.type==='fin_analysis',val:q.type==='valuation'}})};
pendList._orig=orig;
})();
