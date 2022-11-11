/**
 * Promise的resolve方法
 * 将现有对象转为Promise对象
 */

// 1. 参数是一个Promise实例，返回该实例
export const createPromiseResolve1 = function() {
  const p1 = new Promise((resolve, reject) => resolve())
  const p2 = Promise.resolve(p1)
  console.log('p1 = p2: ', p1 === p2)
}

// 2. 参数是一个thenable对象，返回Promise实例
export const createPromiseResolve2 = function() {
  let thenable = {
    then: (resolve, reject) => resolve(42)
  }
  const p = Promise.resolve(thenable)
  p.then(result => console.log('result: ', result))
}

// 3. 参数不是具有then()方法的对象，或根本不是对象，返回新的Promise对象，状态为resolved
export const createPromiseResolve3 = function() {
  const p = Promise.resolve('hello')
  p.then(s => console.log('s: ', s))
}

// 4. 不带任何参数，返回resolved状态的Promise对象
export const createPromiseResolve4 = function() {
  // 下一轮事件循环开始时执行
  setTimeout(() => console.log(3), 0)

  // 本轮事件循环结束时执行
  Promise.resolve().then(() => {
    console.log(2)
  })

  // 立即执行
  console.log(1)
}

// createPromiseResolve1()
// createPromiseResolve2()
// createPromiseResolve3()
// createPromiseResolve4()