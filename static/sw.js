var CACHE_NAME = 'static-cache-v1';

var urlsToCache = [
  '/offline',
];

self.addEventListener('install', function(event) {
  // install files needed offline
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // every request from our site, passes through the fetch handler
  // I have proof
  console.log('[ServiceWorker] Fetch', event.request.url);
  console.log('I am a request with url:', event.request.clone().url)
  if (event.request.mode !== 'navigate') {
  return;
  }
  event.respondWith(
      fetch(event.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('offline');
                });
          })
  );
});
