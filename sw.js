const CACHE = 'suno-hub-matrix-v2';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(['/','index.html','manifest.json','artist_russell_dickerson.json'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(response => response || fetch(e.request)));
});
