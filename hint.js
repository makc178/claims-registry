/* Настройки подсказок в карточках лотов (только подписи и ключевые слова, без данных).
   labels — подписи для ключей lot.legal_flags. keywords — ключевые слова (регулярные выражения, без учёта регистра)
   для угадывания по тексту лота; пустой список = угадывание выключено. Если хотя бы у одного лота есть legal_flags,
   используются только они, угадывание не работает. */
var HINT_CFG={
 order:['license','preemptive','exclusion_check','challenge_risk'],
 labels:{license:'Требуется лицензия',preemptive:'Преимущественное право',exclusion_check:'Проверить исключение из конкурсной массы',challenge_risk:'Риск оспаривания'},
 keywords:{
  license:['(лицензи|разрешени)\\S*(\\s+\\([^)]{0,30}\\))?\\s+на\\s+(приобретение|хранение|ношение)','разрешени\\S*[^.]{0,40}оруж'],
  preemptive:[],
  exclusion_check:[],
  challenge_risk:[]
 }
};

/* подсказки в карточках лотов (ключи lot.legal_flags или ключевые слова; подписи и слова — в hint_config.js) и вид архивных карточек в «Избранном» */
function pHints(l){if(l._ph)return l._ph;const C=self.HINT_CFG||{order:[],labels:{},keywords:{}},LS=(typeof PROP!=='undefined'&&PROP&&PROP.lots)||[];if(pHints._L!==LS){pHints._L=LS;pHints._F=LS.some(x=>Array.isArray(x.legal_flags));pHints._R={};for(const k in C.keywords||{})pHints._R[k]=(C.keywords[k]||[]).map(r=>new RegExp(r,'i'))}let ks;if(pHints._F)ks=Array.isArray(l.legal_flags)?l.legal_flags:[];else{const t=[l.title,l.description].filter(Boolean).join(' ');ks=Object.keys(pHints._R).filter(k=>pHints._R[k].some(r=>r.test(t)))}const o=C.order||[];ks=[...new Set(ks)].filter(k=>C.labels[k]).sort((a,b)=>o.indexOf(a)-o.indexOf(b));return l._ph=ks.map(k=>C.labels[k])}
function pHint(l){const h=pHints(l);return h.length?'<div class="phint"><span class="phi">ⓘ</span>'+h.join(' · ')+'</div>':''}
(function(){var st=document.createElement('style');st.textContent=".phint{grid-column:2/-1;display:flex;align-items:center;gap:6px;justify-self:end;max-width:100%;margin-top:-6px;padding:3px 9px;border-radius:6px;background:rgba(245,165,36,.12);color:#b26f00;font-size:12px;line-height:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:500}.phint .phi{font-size:14px;line-height:14px;flex:none}[data-theme=dark] .phint{color:#F5A524}.tag.arch,[data-theme] .tag.arch{display:inline-block;font-size:12px;padding:0 7px;border-radius:999px;background:transparent;border:1px solid #8a93a3;color:#8a93a3;white-space:nowrap}.plot.arch{opacity:.6}@media(max-width:820px){.phint{grid-column:1/-1;justify-self:start;margin-top:0}}";(document.head||document.documentElement).appendChild(st)})();
