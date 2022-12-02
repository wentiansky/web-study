// 在node.js环境下才能执行
// 在webpack中配置将jpg/jpeg/png转为webp
// npm安装webp-loader

module.exports = {
  // ...
  rules: [{
    test: /.\(jpe?g|png)$/i,
    loaders: [
      'file-loader',
      'webp-loader?{quality: 13}'
    ]
  }]
}