/**
 * Promise的finally()方法
 * 不管状态如何，始终会执行
 * 不接受如何参数，与状态无关
 */

// finally()方法的实现
export const createFinally1 = function () {
  Promise.prototype.finally = function(callback) {
    let P = this.constructor
    return this.then(
      value => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => {throw reason})
    )
  }
}

// finally()总是回返回原来的值
export const createFinally2 = function() {
  Promise.resolve(2).then(() => {}, () => {}).then(val1 => {
    console.log('val1: ', val1)
  })
  Promise.resolve(2).finally(() => {}).then(val2 => {
    console.log('val2: ', val2)
  })
  Promise.reject(3).then(() => {}, () => {}).then(val3 => {
    console.log('val3: ', val3)
  })
  Promise.reject(3).finally(() => {}).then(val4 => {
    console.log('val4: ', val4)
  })
}

// createFinally1()
// createFinally2()