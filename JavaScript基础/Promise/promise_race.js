/**
 * Promise的race方法
 * 将多个Promise实例包装成一个新的Promise实例
 * 如果参数不是Promise实例，会调用Promise.resolve方法转为Promise实例
 * 参数中只要一个实例率先改变状态，p的状态就会改变
 */

export const createPromiseRace1 = function () {
  const p = Promise.race([
    fetch('http://127.0.0.1:5500/JavaScript%E5%9F%BA%E7%A1%80/Promise/test1.json'),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('request timeout')), 3000)
    })
  ])
  p
  .then(async result => {
    const json = await result.json()
    console.log('resolved: ', json)
  })
  .catch(err => console.error('rejected: ', err))
}

// createPromiseRace1()