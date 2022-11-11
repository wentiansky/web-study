/**
 * Promise的catch()方法
 * .then(null, rejection)
 * .then(undefined, rejection)
 * 返回一个Promise对象
 * 可以链式调用then方法
 */

import { getJSON } from './promise_base.js'

export const createCatch1 = function () {
  getJSON('test3.json')
    .then(json => { })
    .catch(error => console.log('发生错误: ', error))
}

export const createCatch2 = function() {
  const p = new Promise((resolve, reject) => reject(new Error('bad')))
  p
    .then(val => console.log('fulfilled1: ', val))
    .catch(err => console.log('rejected1: ', err));

  // 等同于
  p
    .then(val => console.log('fulfilled2: ', val))
    .then(null, err => console.log("rejected2: ", err));
}

export const createCatch3 = function () {
  // 写法一
  const promise1 = new Promise((resolve, reject) => {
    try {
      throw new Error('test1')
    } catch(e) {
      reject(e)
    }
  })
  promise1.catch(error => console.log(error))

  // 写法二
  const promise2 = new Promise((resolve, reject) => {
    reject(new Error('test2'))
  })
  promise2.catch(error => console.log(error))
}

// promise错误会一直向后传递，
// 一般不在then第二个参数处理错误
// 总是使用catch方法
export const createCatch4 = function() {
  getJSON('test3.json')
    .then(json => getJSON('test4.json'))
    .then(json => console.log(json))
    .catch(error => console.log(error))
}

// promise内部报错不会传递到外层代码
// 不会影响其他代码执行
export const createCatch5 = function() {
  const someAsyncThing = function() {
    return new Promise(function(resolve, reject) {
      console.log('this: ', this)
      resolve(x + 2)
    })
  }
  someAsyncThing().then(() => console.log('everything is great'))
  setTimeout(() => console.log(123), 2000)
}

// promise运行结束，下一轮事件循环抛出错误
export const createCatch6 = function() {
  const promise = new Promise((resolve, reject) => {
    resolve('ok')
    setTimeout(() => {
      throw new Error('test')
    })
  }, 0)
  promise.then(value => console.log(value))
}

// 建议Promise后面跟catch()方法，可以捕获Promise内部错误
export const createCatch7 = function() {
  const someAsyncThing = function() {
    return new Promise((resolve, reject) => {
      resolve(x + 2)
    })
  }
  someAsyncThing()
    .catch(error => console.log('oh no: ', error))
    .then(() => console.log('carry on'))
}

// Promise内部没有错误，跳过catch()方法，执行then()方法
export const createCatch8 = function() {
  Promise.resolve()
    .catch(err => console.log('oh no: ', err))
    .then(() => console.log('carry on'))
}

// 后一个catch()可以捕获前一个catch()的错误
export const createCatch9 = function() {
  const someAsyncThing = function() {
    return new Promise((resolve, reject) => {
      resolve(x + 2)
    })
  }
  someAsyncThing()
    .then(() => console.log('ok'))
    .catch(err => {
      console.log('oh no: ', err)
      y + 2
    })
    .catch(err => console.log('carry on: ', err))
}

// createCatch1()
// createCatch2()
// createCatch3()
// createCatch4()
// createCatch5()
// createCatch6()
// createCatch7()
// createCatch8()
// createCatch9()