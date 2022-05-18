(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['exports', 'b'], factory)
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(exports, require('b'))
  } else {
    // Browser
    factory((root.commonJsStrict = {}), root.b)
  }
} (typeof self !== undefined ? self : this, function (exports, b) {
  exports.action = function () {}
}))