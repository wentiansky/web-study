const path = require("path");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),

    /* proxy: {
      '/api': {
        target: 'http://localhost:3000',
        // secure: false
      }
    }, */

    /* setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
      }
      middlewares.unshift({
        path: '/api/data',
        middleware: (req, res) => {
          res.send({
            list: ['A', 'B', 'C'],
            msg: 'webpack mock'
          })
        }
      })
      return middlewares
    } */

    allowedHosts: 'all'
  },
};
