/* eslint no-restricted-globals: 1 */

const CACHE_NAME = "sudo-v4";

const HASH_KEY = "c06cf84aba41953f720d";

let CACHE_URLS = [
    // pages
    "/",
    "index.html",

    // images
    "/build/images/offmp4.ecffb27a.jpg",
    "/build/images/vijay.ef6c1bc9.jpg",

    // js
    "/build/0-[HASH_KEY].js",
    "/build/1-[HASH_KEY].js",
    "/build/2-[HASH_KEY].js",
    "/build/3-[HASH_KEY].js",
    "/build/4-[HASH_KEY].js",
    "/build/bundle-[HASH_KEY].js",
    "/build/vendors~bundle-[HASH_KEY].js",
    "/build/polyfill-[HASH_KEY].js",
    "/build/vendors~polyfill-[HASH_KEY].js"
];

// add hash key
CACHE_URLS = CACHE_URLS.map(el => el.replace(/\[HASH_KEY\]/gu, HASH_KEY));

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_URLS))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName.indexOf(CACHE_NAME) === 0) {
                        return null;
                    }

                    return caches.delete(cacheName);
                })
            )
        )
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;

    // Ignore not GET request.
    if (request.method !== "GET") {
        return null;
    }

    const requestUrl = new URL(event.request.url);

    if (requestUrl.pathname === "/") {
        event.respondWith(
            caches.open(CACHE_NAME).then(cache =>
                cache.match(request).then(cachedResponse => {
                    const fetchPromise = fetch(request)
                        .then(networkResponse => {
                            cache.put(request, networkResponse.clone());

                            return networkResponse;
                        })
                        .catch(() => cachedResponse);

                    return fetchPromise || cachedResponse;
                })
            )
        );

        // handlle request for file cached during installation
    } else if (
        CACHE_URLS.includes(requestUrl.href) ||
        CACHE_URLS.includes(requestUrl.pathname)
    ) {
        event.respondWith(
            caches
                .open(CACHE_NAME)
                .then(cache =>
                    cache
                        .match(request)
                        .then(
                            cachedResponse => cachedResponse || fetch(request)
                        )
                )
        );

        // if google font
    }
});
