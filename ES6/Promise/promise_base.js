/**
 * promise基本用法
 */

// 创建一个promise
export const createPromise1 = function() {
  const promise1 = new Promise((resolve, reject) => {
    if (true) {
      // 异步执行成功
      resolve()
    } else {
      reject()
    }
  })
  promise1.then(value => {
    // success
  }, error => {
    // failure
  })
}

// 简单异步例子
export const createAsyncPromise = function() {
  function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done')
    })
  }
  timeout(100).then(value => {
    console.log(value)
  })
}

// setTimeout可以给回调函数传递多个附加参数
export const testSetTimeoutArgs = function() {
  setTimeout((a, b, c) => {
    console.log('a: ', a)
    console.log('b: ', b)
    console.log('c: ', c)
  }, 1000, 1, 2, 3)
}

// promise创建后会立即执行
export const createPromise2 = function() {
  const promise2 = new Promise((resolve, reject) => {
    console.log('1: Promise')
    resolve()
  })
  promise2.then(value => {
    console.log('3: resolved.')
  })
  console.log('2: Hi!')
}

// 异步加载图片的例子
export const loadImage = function() {
  function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.src = url
      image.onload = function () {
        resolve(image)
      }
      image.onerror = function () {
        reject(new Error(`Could not load image at ${url}`))
      }
    })
  }
  loadImageAsync('https://mmbiz.qpic.cn/mmbiz/pfCCZhlbMQTn1pZ8MnehWiba2cp9UdjBy6KLHZJSklt9AicqmsatACiczaNuntUUoC0xEgaBSYIDvef1GQgrh5x0A/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1')
    .then(image => {
      console.log(image)
      document.body.appendChild(image)
    })
}

// 实现ajax操作
export const getJSON = function(url) {
  const promise = new Promise((resolve, reject) => {
    const handler = function() {
      if (this.readyState !== 4) return
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.onreadystatechange = handler
    xhr.responseType = 'json'
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.send()
  })
  return promise
}

// 测试获取json文件
export const testGetJSON = function() {
  getJSON('test1.json').then(json => {
    console.log('contents: ', json)
  }, error => {
    console.error(`出错了: ${ error }`)
  })
}

// resolve的参数是一个promise实例
export const returnOtherPromise = function() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail')), 3000)
  })
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(p1), 1000)
  })
  p2
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

// 调用resolve或reject后，后续操作应该放在then方法里面
export const createPromise3 = function() {
  new Promise((resolve, reject) => {
    return resolve(1)
    // 后面的语句不会执行
    console.log(2)
  }).then(value => {
    console.log(value)
  })
}

// createPromise1()
// createAsyncPromise()
// testSetTimeoutArgs()
// createPromise2()
// loadImage()
// testGetJSON()
// returnOtherPromise()
// createPromise3()