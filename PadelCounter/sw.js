self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("padel-score").then(cache => {
            return cache.addAll(["/", "/manifest.json", "/index.html"]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});