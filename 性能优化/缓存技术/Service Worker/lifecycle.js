/* 注册 */
// 仅当浏览器支持Service Worker进行注册
// 等页面完成加载后再注册，避免阻塞网站渲染
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

/* 安装 */
// 缓存页面稍后会用到的资源内容
const cacheName = 'cache-v1'
// 监听Service Worker的install事件并进行缓存操作
self.addEventListener('install', (event) => {
  // 设置安装步骤的处理内容
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => 
        cache.addAll([
          '/dist/index.js',
          '/dist/css/index.css'
        ])
      )
  )
})

/* 激活 */
// 跳过旧的Service Worker，让新的Service Worker进入激活态，以获取对页面的控制权
self.addEventListener('install', event => {
  self.skipWaiting()
})

/* 响应缓存 */
// 接收页面发出的fetch事件进行缓存响应的相关操作
self.addEventListener('fetch', event => {
  event.respondWith(
    // 看是否能匹配到已有的缓存内容
    caches.match(event.request)
      .then(response => {
        if (response) return response
        const fetchRequest = event.request.clone()
        return fetch(fetchRequest).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }
          const responseToCache = response.clone()
          caches.open(cacheName)
            .then(cache => cache.put(event.request, responseToCache))
          return response
        })
      })
  )
})

/* 开发者观察Service Worker的整个更新周期 */
navigator.serviceWorker.register('/service-worker.js').then(reg => {
  // 如果reg.installing不为undefined，说明处于正在安装状态
  reg.installing;

  // 如果reg.waiting不为undefined，说明处于安装后的等待状态
  reg.waiting;

  // 如果reg.active不为undefined，说明处于激活状态
  reg.active;

  reg.addEventListener('updatefound', () => {
    const netWorker = reg.installing
    // Service Worker的装填字符串，包括：installing / installed / activating / activated / redundant
    netWorker.state;
    netWorker.addEventListener('statechange', () => {
      // 生命周期状态改变所触发的事件
    })
  })
})

navigator.serviceWorker.addEventListener('controllerchange', () => {
  // 一个新的Service Worker从等待状态进入激活状态，获得了当前页面的控制权
})