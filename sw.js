self.addEventListener('fetch', (event) => {
  // 滿足 Android Chrome PWA 安裝與離線檢測條件
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});