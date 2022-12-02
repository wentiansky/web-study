// 在node.js环境下才能执行
// 在webpack中配置优化svg

module.exports = {
  // ...
  rules: [{
    test: /.\svg$/,
    use: [
      {loader: 'file-loader'},
      {
        loader: 'svgo-loader',
        options: {
          externalConfig: 'svgo-config.yml'
        }
      }
    ]
  }]
}