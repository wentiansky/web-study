/**
 * ES2021
 * Promise的any方法
 * 将多个Promise实例包装成一个新的Promise实例
 * 有一个实例变成fulfilled状态，包装实例就会变成fulfilled状态
 * 所有实例都变成rejected状态，包装实例就会变成rejected状态
 */

export const createPromiseAny1 = function() {
  Promise.any([
    fetch('test1.json'),
    fetch('test2.json'),
    fetch('https://notfound/')
  ])
  .then(first => console.log('first: ', first)) // 只要有一个fetch()请求成功
  .catch(error => console.log('err: ', error))
}

export const createPromiseAny2 = async function() {
  const promises = [
    fetch('test1.json'),
    fetch('test2.json'),
  ]
  try {
    const first = await Promise.any(promises)
    console.log('first: ', first)
  } catch(error) {
    console.log('err: ', error)
  }
}

export const createPromiseAny3 = function() {
  const resolved = Promise.resolve(42)
  const rejected1 = Promise.reject(-1)
  const rejected2 = Promise.reject(Infinity)

  Promise.any([resolved, rejected1. rejected2]).then(result => console.log('result: ', result))
  Promise.any([rejected1, rejected2]).catch(results => {
    // Promise.any()抛出的错误是一个AggregateError实例
    console.log(results instanceof AggregateError)
    console.log('err: ', results.errors)
  })
}

// createPromiseAny1()
// createPromiseAny2()
// createPromiseAny3()