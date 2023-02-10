(function () {
  require.config({
    baseUrl: 'js/',
    paths: {
      module1: './modules/module1',
      module2: './modules/module2',
      jquery: './libs/jquery-3.6.3'
    }
  })
  require(['module2'], function (m2) {
    m2.showMsg()
  })
})()