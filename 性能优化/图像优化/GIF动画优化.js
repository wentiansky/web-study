// 在node.js环境下才能执行
// GIF动画优化，借助gifsicle移除动画中连续帧中重复的像素信息

const { execFile } = require('child_process')
const gifsicle = require('gifsicle')

execFile(gifsicle, ['-o', 'output.gif', 'input.gif'], err => {
  console.log('动画压缩完成')
})