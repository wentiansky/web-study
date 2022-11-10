/**
 * ES2020
 * Promise的allSettled方法
 * 将多个Promise实例包装成一个新的Promise实例
 * 等所有异步操作执行完成后，在进行下一步
 * 即使有失败的操作，也会继续执行(与Promise.all相反)
 */

export const createPromiseAllSettled1 = async function () {
  const urls = ['https://does-not-exist/', '2', '3']
  const requests = urls.map(x => fetch(x))
  try {
    await Promise.all(requests)
    console.log('所有请求都成功')
  } catch{
    console.log('至少一个请求失败，其他请求可能还没结束')
  }
}

export const createPromiseAllSettled2 = function() {
  const resolved = Promise.resolve(42)
  const rejected = Promise.reject(-1)
  const allSettledPromise = Promise.allSettled([resolved, rejected])
  allSettledPromise.then(results => console.log(results))
  // [{status: 'fulfilled', value: 42}, {status: 'rejected', reason: -1}]
}

export const createPromiseAllSettled3 = async function() {
  const promises = [
    fetch('test1.json'),
    fetch('https://does-not-exist/')
  ]
  const results = await Promise.allSettled(promises)
  // 需要用Promise.all()包裹map返回的promise对象，否则，得到的结果状态是pending
  const successfulPromises = results.filter(p => p.status === 'fulfilled').map(p => p.value.json())
  const errors = results.filter(p => p.status === 'rejected').map(p => p.reason)

  console.log('successfulPromises1: ', successfulPromises)
  Promise.all(successfulPromises).then(results => console.log('successfulPromises2: ', results))
  console.log('errors: ', errors)
}

// createPromiseAllSettled1()
// createPromiseAllSettled2()
// createPromiseAllSettled3()