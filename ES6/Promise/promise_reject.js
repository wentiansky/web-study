/**
 * Promise的reject方法
 * 将现有对象转为Promise对象
 * 实例状态为rejected
 */

export const createPromiseReject1 = function() {
  const p1 = new Promise((resolve, reject) => reject('出错了')).then(null, error => {
    console.log('err: ', error)
    console.log(`error === 出错了? `, error === '出错了')
  })
  const p2 = Promise.reject('出错了')
}

// createPromiseReject1()