const CACHE_PREFIX = "aula-virtual-";
const CACHE_NAME = "aula-virtual-v4";
// El alcance procede del registro: funciona en Vercel y GitHub Pages.
const BASE_PATH = new URL("./", self.registration.scope).pathname;
const OFFLINE_URL = new URL("offline.html", self.registration.scope).pathname;
const APP_ASSETS = [
  BASE_PATH,
  OFFLINE_URL,
  new URL("app-icon.svg", self.registration.scope).pathname,
  new URL("icons/icon-192.png", self.registration.scope).pathname,
  new URL("icons/icon-512.png", self.registration.scope).pathname,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isLocal = url.origin === self.location.origin;

  if (isLocal && !url.pathname.startsWith(BASE_PATH)) return;

  // Navegación: primero red; si no hay conexión, usa la última página guardada
  // o la pantalla offline.
  if (isLocal && request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response && response.ok) {
          await cache.put(request, response.clone());
          // Guarda también la página principal como alternativa offline.
          if (url.pathname === BASE_PATH) {
            await cache.put(BASE_PATH, response.clone());
          }
        }
        return response;
      } catch {
        return (await cache.match(request)) ||
          (await cache.match(BASE_PATH)) ||
          (await cache.match(OFFLINE_URL)) ||
          Response.error();
      }
    })());
    return;
  }

  // Cachea recursos locales y externos (imágenes y fuentes como Google Fonts).
  // Las respuestas CORS y opacas también pueden guardarse en Cache Storage.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;

    try {
      const response = await fetch(request);
      if (response && (response.ok || response.type === "opaque")) {
        try {
          await cache.put(request, response.clone());
        } catch (error) {
          // Si el navegador rechaza guardar un recurso, la página sigue online.
          console.warn("No se pudo guardar el recurso en caché:", url.href, error);
        }
      }
      return response;
    } catch {
      return Response.error();
    }
  })());
});
