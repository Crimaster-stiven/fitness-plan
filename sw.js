const CACHE_NAME = 'fp-cache-v2';
const STATIC_ASSETS = [
  '.',
  'index.html',
  'exercises-library.html',
  'manifest.json',
  'exercises/exercise-map.js',
  'exercises/exercises-dataset.json',
  'exercises/01_杠铃深蹲.jpg',
  'exercises/02_杠铃卧推.jpg',
  'exercises/03_罗马尼亚硬拉.jpg',
  'exercises/04_杠铃俯身划船.jpg',
  'exercises/05_杠铃推举OHP.jpg',
  'exercises/06_保加利亚分腿蹲.jpg',
  'exercises/07_引体向上.jpg',
  'exercises/08_哑铃侧平举.jpg',
  'exercises/09_上斜哑铃飞鸟.jpg',
  'exercises/10_绳索面拉.jpg',
  'exercises/11_杠铃弯举.jpg',
  'exercises/12_绳索三头下压.jpg',
  'exercises/13_平板支撑.jpg',
  'exercises/14_腿举.jpg',
  'exercises/15_坐姿绳索划船.jpg',
  'exercises/16_哑铃卧推.jpg',
  'exercises/17_前蹲.jpg',
  'exercises/18_小腿提踵.jpg',
  'exercises/19_坐姿腿屈伸.jpg',
  'exercises/20_俯卧腿弯举.jpg'
];

// Install: pre-cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache one by one so individual failures don't break install
      return Promise.allSettled(
        STATIC_ASSETS.map(url =>
          cache.add(url).catch(() => {/* skip failed asset */})
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, network fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful responses for future offline use
        if (response && response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
