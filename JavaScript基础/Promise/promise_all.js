/**
 * Promise的all方法
 * 将多个Promise实例包装成一个新的Promise实例
 * 如果参数不是Promise实例，会调用Promise.resolve方法转为Promise实例
 * 参数可以不是数组，但必须具有Iterator接口
 * 所有参数都变成fulfilled，返回的值变成fulfilled
 * 有一个参数变成rejected，返回的值变成rejected
 */
import { getJSON } from './promise_base.js'

export const createPromiseAll1 = function () {
  const promises = [3, 5, 7].map(id => getJSON(`test${ id }.json`))
  Promise.all(promises).then(json => {
    console.log(json)
  }).catch(err => {
    console.log(err)
  })
}

// 如果p2有自己的catch方法，就不会调用Promise.all()的catch方法
export const createPromiseAll2 = function() {
  const p1 = new Promise((resolve, reject) => {
    resolve('hello')
  })
  .then(result => result)
  .catch(e => e)

  const p2 = new Promise((resolve, reject) => {
    throw new Error('报错了')
  })
  .then(result => result)
  .catch(e => e) // 执行完catch方法后，也会变成resolved，Promise.all()的两个实例都会 

  Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(e => console.log(e))
}

// createPromiseAll1()
// createPromiseAll2()