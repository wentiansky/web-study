/**
 * 1. 可进行链式调用，每次then返回新的Promise
 * 2. 状态只能由Pending -> Fulfilled或者Pending -> Rejected，不可逆
 * 3. then返回新的Promise，then中注册的回调仍然属于上一个Promise
 */
function Promise_v1(fn) {
  let state = 'pending'
  let value = null
  const callbacks = []

  this.then = function (onFulfilled, onRejected) {
    return new Promise_v1((resolve, reject) => {
      handle({
        onFulfilled, // then的回调函数
        onRejected,
        resolve,
        reject
      })
    })
  }

  this.catch = function (onError) {
    this.then(null, onError)
  }

  this.finally = function (onDone) {
    this.then(onDone, onDone)
  }

  this.resolve = function (value) {
    if (value && value instanceof Promise_v1) {
      return value
    } else if (value && typeof value === 'object' && typeof value.then === 'function') {
      const { then } = value
      return new Promise_v1((resolve) => {
        then(resolve)
      })
    } else if (value) {
      return new Promise_v1(resolve => resolve(value))
    } else {
      return new Promise_v1(resolve => resolve())
    }
  }

  this.reject = function (value) {
    return new Promise_v1((resolve, reject) => reject(value))
  }

  this.all = function (arr) {
    let args = Array.prototype.slice.call(arr)
    return new Promise_v1((resolve, reject) => {
      if (args.length === 0) return resolve([])
      let remaining = args.length
      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            const { then } = val
            if (typeof then === 'function') {
              then.call(val, val => {
                res(i, val)
              }, reject)
              return
            }
          }
          args[i] = val
          if (--remaining === 0) {
            resolve(args)
          }
        } catch(err) {
          reject(err)
        }
      }
      for (let i = 0; i < args.length; i++) {
        res(i, args[i])
      }
    })
  }

  this.race = function(values) {
    return new Promise_v1((resolve, reject) => {
      for (let i = 0; i < values.length; i++) {
        values[i].then(resolve, reject)
      }
    })
  }

  function handle (callback) {
    if (state === 'pending') {
      callbacks.push(callback)
      return
    }
    let cb, next
    if (state === 'fulfilled') {
      cb = callback.onFulfilled
      next = callback.resolve
    } else if (state === 'rejected') {
      cb = callback.onRejected
      next = callback.reject
    }
    if (!cb) {
      next(value)
      return
    }
    // 异常处理
    try {
      const ret = cb(value)
      next(ret)
    } catch (err) {
      callback.reject(err)
    }
  }
  
  function resolve (newValue) {
    const fn = () => {
      if (state !== 'pending') return
      // resolve入参为Promise
      if (newValue && ['object', 'function'].includes(typeof newValue)) {
        const { then } = newValue
        if (typeof then === 'function') {
          // newValue为新产生的Promise
          // resolve是上一个Promise的
          // 为newValue注册上一个Promise的resolve回调函数，链式调用才能连续
          then.call(newValue, resolve, reject)
          return
        }
      }
      state = 'fulfilled' // pending -> fulfilled
      value = newValue
      handleCb()
    }
    setTimeout(fn, 0)
  }

  function reject (error) {
    const fn = () => {
      if (state !== 'pending') return
      if (error && ['object', 'function'].includes(typeof error)) {
        const { then } = error
        if (typeof then === 'function') {
          then.call(error, resolve, reject)
          return
        }
      }
      state = 'rejected'
      value = error
      handleCb()
    }
    setTimeout(fn, 0)
  }

  function handleCb () {
    while(callbacks.length) {
      const fn = callbacks.shift()
      handle(fn)
    }
  }
  fn(resolve, reject)
}

new Promise_v1((resolve, reject) => {
  setTimeout(() => {
    resolve({ test: 1 })
  }, 1000)
}).then(data => {
  console.log('result1', data)
  //dosomething
  return test()
}).then(data => {
  console.log('result2', data)
})

function test(id) {
  return new Promise_v1((resolve, reject) => {
    setTimeout(() => {
      resolve({ test: 2 })
    }, 5000)
  })
}

// p1             callbacks: [{ onFulfilled: 第一个then的回调, resolve: p2的resolve }]
// p2(p1.then)    callbacks: [{ onFulfilled: 第二个then的回调，resolve: p3的resolve }]
// p3(p2.then)