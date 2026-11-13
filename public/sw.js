const CACHE_PREFIX = "aula-virtual-";
const CACHE_VERSION = "v5";
const SHELL_CACHE = `${CACHE_PREFIX}shell-${CACHE_VERSION}`;
const PAGE_CACHE = `${CACHE_PREFIX}pages-${CACHE_VERSION}`;
const ASSET_CACHE = `${CACHE_PREFIX}assets-${CACHE_VERSION}`;

const MAX_CACHED_PAGES = 15;
const MAX_CACHED_ASSETS = 80;

const BASE_PATH = new URL("./", self.registration.scope).pathname;
const OFFLINE_URL = new URL("offline.html", self.registration.scope).pathname;

const APP_ASSETS = [
  BASE_PATH,
  OFFLINE_URL,
  new URL("app-icon.svg", self.registration.scope).pathname,
  new URL("icons/icon-192.png", self.registration.scope).pathname,
  new URL("icons/icon-512.png", self.registration.scope).pathname,
];

const STATIC_FILE_PATTERN =
  /\.(?:avif|css|docx|gif|html|ico|jpeg|jpg|js|mjs|pdf|png|pptx|svg|webp|woff2?|ttf)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(SHELL_CACHE);
      await cache.addAll(APP_ASSETS);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const currentCaches = new Set([SHELL_CACHE, PAGE_CACHE, ASSET_CACHE]);
      const keys = await caches.keys();

      await Promise.all(
        keys
          .filter(
            (key) => key.startsWith(CACHE_PREFIX) && !currentCaches.has(key)
          )
          .map((key) => caches.delete(key))
      );

      await self.clients.claim();
    })()
  );
});

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const requests = await cache.keys();

  if (requests.length <= maxEntries) return;

  const excess = requests.length - maxEntries;
  await Promise.all(
    requests.slice(0, excess).map((request) => cache.delete(request))
  );
}

function isSuccessfulCacheResponse(response) {
  if (!response || response.status !== 200 || response.type === "opaque") {
    return false;
  }

  const cacheControl = response.headers.get("Cache-Control") || "";
  return !/no-store|private/i.test(cacheControl);
}

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Nunca interceptar envíos de formularios, escrituras ni otros métodos.
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const isLocal = url.origin === self.location.origin;

  // Los recursos externos (por ejemplo, fuentes de terceros) quedan fuera
  // de la caché para evitar almacenamiento ilimitado o contenido ajeno.
  if (!isLocal || !url.pathname.startsWith(BASE_PATH)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const pageCache = await caches.open(PAGE_CACHE);
        const shellCache = await caches.open(SHELL_CACHE);

        try {
          const response = await fetch(request);

          if (isSuccessfulCacheResponse(response)) {
            await pageCache.put(request, response.clone());
            await trimCache(PAGE_CACHE, MAX_CACHED_PAGES);
          }

          return response;
        } catch {
          return (
            (await pageCache.match(request)) ||
            (await shellCache.match(BASE_PATH)) ||
            (await shellCache.match(OFFLINE_URL)) ||
            Response.error()
          );
        }
      })()
    );
    return;
  }

  // Solo guardar archivos estáticos locales. Se excluyen llamadas dinámicas,
  // datos de API y recursos externos.
  if (!STATIC_FILE_PATTERN.test(url.pathname)) return;

  event.respondWith(
    (async () => {
      const assetCache = await caches.open(ASSET_CACHE);
      const cached = await assetCache.match(request);

      if (cached) return cached;

      try {
        const response = await fetch(request);

        if (isSuccessfulCacheResponse(response)) {
          await assetCache.put(request, response.clone());
          await trimCache(ASSET_CACHE, MAX_CACHED_ASSETS);
        }

        return response;
      } catch {
        return (await assetCache.match(request)) || Response.error();
      }
    })()
  );
});
