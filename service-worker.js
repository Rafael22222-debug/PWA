self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('cache-v1').then((cache) => {
        return cache.addAll([
    'index.html',
    'style.css',
    'script.js',
    'manifest.json',
    'service-worker.js',
    'qrIcon.png'
  ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        return resp || fetch(event.request);
      })
    );
  });