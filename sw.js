/* Эверест: офлайн-открытие. Кэширует только файлы приложения с этого сайта; данные (api.github.com) не трогает. */
var C='ev-shell-v1';
self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){var r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin||/version\.json$/.test(u.pathname))return;
 e.respondWith(fetch(r).then(function(res){if(res.ok){var c=res.clone();caches.open(C).then(function(x){x.put(r,c)})}return res}).catch(function(){return caches.match(r,{ignoreSearch:r.mode==='navigate'}).then(function(m){return m||caches.match('./',{ignoreSearch:true})})}))});
