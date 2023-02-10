define(function (require, exports, module) {
  const data = 'baidu.com'
  function show() {
    console.log('module1 show(): ' + data)
  }
  exports.show = show
})