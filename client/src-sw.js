const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching 
registerRoute(
    // Here we define the callback function that will filter the requests we want to cache (in this case, JS and CSS files)
    ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
    new StaleWhileRevalidate({
      // Name of the cache storage.
      cacheName: 'asset-cache',
      plugins: [
        // This plugin will cache responses with these headers to a maximum-age of 30 days
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    })
);

// Install - the service worker is first installed and then activated.
self.addEventListener('install', (e) =>
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
);

// Activate - the service worker is activated after install.
self.addEventListener('activate', (e) =>
  e.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  )
);

// Claim - the service worker is claimed after install.
// When a service worker is initially registered, pages won't use it until the next load.
// The clients.claim() method is used to claim the service worker immediately.
self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// Example of a simple cache-first network-first strategy
// The service worker is checking the cache for a response and if it doesn't find it, it fetches it.
self.addEventListener('fetch', (e) =>
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
);
