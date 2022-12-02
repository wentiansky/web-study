// 在node.js环境下才能执行
// 通过pngcrush压缩PNG图片

const imagemin = require('imagemin')
const imageminPngcrush = require('imagemin-pngcrush')

imagemin(['images/*.png'], 'build/images', {
  plugins: [imageminPngcrush()]
}).then(() => console.log('完成图像优化'))