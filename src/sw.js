// 周期ノート - Service Worker
const CACHE = "cycle-noter-v1";

self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(clients.claim());
});

// ネットワークリクエストはそのまま通す（オフラインはlocalStorageで担保）
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
