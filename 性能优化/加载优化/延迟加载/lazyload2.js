// 通过Intersection Observer方式判断
document.addEventListener('DOMContentLoaded', function () {
  const lazyImages = [...document.querySelectorAll('img.lazy')]
  // 判断浏览器兼容性
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.classList.remove('lazy')
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })
    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage)
    })
  }
})