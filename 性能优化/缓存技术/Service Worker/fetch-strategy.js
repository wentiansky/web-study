/* 静态资源高效加载策略 */
self.addEventListener('fetch', event => {
  // 请求HTML文档资源
  if (event.request.mode === 'navigate') {
    event.respondWith(async () => {
      // 拦截页面请求
      const normalizedUrl = new URL(event.request.url)
      normalizedUrl.search = ''
      // 定义对资源重新请求的方法
      const fetchResponse = fetch(normalizedUrl)
      const fetchResponseClone = fetchResponse.then(r => r.clone())
      // 等到请求响应到达后，更新缓存中的资源
      event.waitUntil(async function () {
        const cache = await caches.open('cacheName')
        await cache.put(normalizedUrl, await fetchResponseClone)
      }())
      return (await caches.match(normalizedUrl)) || fetchResponse
    })
  }
})