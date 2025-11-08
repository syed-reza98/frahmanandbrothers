const CACHE_NAME = 'frahman-shell-v1';
const URLs_TO_CACHE = [
  '/',
  '/frahmanandbrothers/',
  '/frahmanandbrothers/index.html',
  '/frahmanandbrothers/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLs_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).catch(() => caches.match('/frahmanandbrothers/index.html'))
    );
    return;
  }
  
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      
      return fetch(req).then((res) => res).catch(() => {
        return caches.match('/frahmanandbrothers/index.html');
      });
    })
  );
});
