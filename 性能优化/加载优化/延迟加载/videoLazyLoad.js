/** 
 * 延迟加载video
*/
document.addEventListener('DOMContentLoaded', () => {
  const lazyVideos = [...document.querySelectorAll('video.lazy')]
  if ('IntersectionObserver' in window) {
    const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          for (const source in entry.target.children) {
            const videoSource = entry.target.children[source]
            if (
              typeof videoSource.tagName === 'string' &&
              videoSource.tagName === 'source'
            ) {
              videoSource.src = videoSource.dataset.src
            }
          }
          entry.target.load()
          entry.target.classList.remove('lazy')
          lazyVideoObserver.unobserve(entry.target)
        }
      })
    })
    lazyVideos.forEach(lazyVideo => {
      lazyVideoObserver.observe(lazyVideo)
    })
  }
})