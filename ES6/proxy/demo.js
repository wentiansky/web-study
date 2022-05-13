// Proxy: 代理器，对目标对象进行拦截，可以对外界的访问进行过滤和修改。

var obj = new Proxy({}, {
  get: function(target, propKey, receiver) {
    console.log(`getting ${propKey}!`)
    return Reflect.get(target, propKey, receiver)
  },
  set: function(target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`)
    return Reflect.set(target, propKey, value, receiver)
  }
});

obj.count = 1
// setting count!

++obj.count
// getting count!
// setting count!
// 2

// 代理目标对象
var target = {}
var handler = {}
var proxy = new Proxy(target, handler)
proxy.a = 'b'
console.log('target.a: ', target.a) // 'b'

// proxy实例作为原型对象
var proxy = new Proxy({}, {
  get(target, key) {
    return 35
  }
})

var obj = Object.create(proxy)
console.log('obj.time: ', obj.time) // 35