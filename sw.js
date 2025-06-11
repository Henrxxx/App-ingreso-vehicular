// Simple Service Worker para PWA offline básico
const CACHE = "vehiculo-pwa-v1";
const FILES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/sw.js",
  "/membrete%20Cargus.png",
  "/icon-192.png",
  "/icon-512.png"
  // Agrega aquí tus otros recursos si los tienes
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});