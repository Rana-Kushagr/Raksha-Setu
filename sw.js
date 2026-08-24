// RakshaSetu Service Worker v3.0 — Full Offline Cache-First Strategy
const CACHE_NAME = 'rakshasetu-v3';
const CORE_CACHE = [
  './',
  './index.html',
  './manifest.json',
];

// External CDN assets — cached on first network fetch
const CDN_HOSTS = [
  'cdn.tailwindcss.com',
  'unpkg.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

// Install: cache core app shell immediately
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(CORE_CACHE).catch(() => {})
    )
  );
  self.skipWaiting();
});

// Activate: delete old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: Cache-first for app shell + CDN, network-first for GPS/maps
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Always serve app shell from cache (offline-first)
  if (url.pathname === '/' || url.pathname.endsWith('index.html') || url.pathname.endsWith('manifest.json')) {
    event.respondWith(
      caches.match(event.request).then(
        (cached) => cached || fetch(event.request).then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          return res;
        })
      ).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // CDN resources: cache-first, update in background (stale-while-revalidate)
  if (CDN_HOSTS.some((h) => url.hostname.includes(h))) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        const networkFetch = fetch(event.request).then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          }
          return res;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // Everything else: network with cache fallback
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.match(event.request).then((c) => c || caches.match('./index.html'))
    )
  );
});
