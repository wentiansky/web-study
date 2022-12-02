// 在node.js环境下才能执行
// 单帧的GIF转化为PNG

const im = require('imagemagick')

// 检查是否为动画
im.identify(['-format', '%m', 'my.gif'], (err, output) => {
  if (err) throw err
  // 通过output处理判断流程
})

// 将gif转化为png
im.convert(['my.gif', 'my.png'], (err, stdout) => {
  if (err) throw err
  console.log('转化完成', stdout)
})