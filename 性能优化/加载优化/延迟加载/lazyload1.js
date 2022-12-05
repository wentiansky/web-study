// 通过图片上沿离视窗顶部的距离与视窗的高度做判断
document.addEventListener('DOMContentLoaded', function () {
  let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'))
  // 限制函数被频繁调用
  let active = false
  const lazyLoad = function () {
    if (active === false) {
      active = true
      setTimeout(function () {
        lazyImages.forEach(function (lazyImage) {
          if (
            lazyImage.getBoundingClientRect().top <= window.innerHeight &&
            lazyImage.getBoundingClientRect().bottom >= 0 &&
            getComputedStyle(lazyImage).display !== 'none'
          ) {
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove('lazy')
            lazyImages = lazyImages.filter(function (image) {
              return image !== lazyImage
            })
            if (lazyImages.length === 0) {
              document.body.removeEventListener('scroll', lazyLoad)
              window.removeEventListener('resize', lazyLoad)
              window.removeEventListener('orientationchange', lazyLoad)
            }
          }
        })
        active = false
      }, 200)
    }
  }
  // 需要为图片的容器元素绑定scroll事件，方可生效
  document.body.addEventListener('scroll', lazyLoad)
  window.addEventListener('resize', lazyLoad)
  window.addEventListener('orientationchange', lazyLoad)
})