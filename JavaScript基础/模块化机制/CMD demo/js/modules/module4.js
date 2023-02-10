define(function (require, exports, module) {
  // 同步引入依赖模块
  const m2 = require('./module2')
  function show() {
    console.log('module4 show(): ' + m2.msg)
  }
  exports.show = show
  // 异步引入依赖模块
  require.async('./module3', function (m3) {
    console.log('异步引入依赖模块: ' + m3.API_KEY)
  })
})