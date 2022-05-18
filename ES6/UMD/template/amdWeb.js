(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['b', factory])
  } else {
    root.amdWeb = factory(root.b)
  }
} (typeof self !== undefined ? self : this, function (b) {
  return {}
}))