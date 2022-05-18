// 如果没有依赖关系，可以省略'b'
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['b'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // Node
    module.exports = factory(require('b'))
  } else {
    // Browser
    root.returnExports = factory(root.b)
  }
} (typeof self !== undefined ? self : this, function (b) {
  return {}
}))