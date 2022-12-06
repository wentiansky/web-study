/**
 * 大图片延迟解码
 */

document.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.querySelector('#load-image')
  const imageContainer = document.querySelector('#image-container')
  const newImage = new Image()
  newImage.src = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa05c760dc6e4057bb19f8f0c30190ed~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?'
  loadButton.addEventListener('click', () => {
    if ('decode' in newImage) {
      newImage.decode().then(() => {
        imageContainer.appendChild(newImage)
      })
    } else {
      imageContainer.appendChild(newImage)
    }
  }, {
    once: true
  })
})