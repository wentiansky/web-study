/**
 * Promise的then方法
 * 第一个参数是resolved状态的回调函数
 * 第二个参数是rejected状态的回调函数
 * 返回新的Promise实例
 * 可以链式调用
 */
import { getJSON } from './promise_base.js'

// 链式调用then
export const createThen1 = function() {
  getJSON('test1.json')
  .then(json => json.name)
  .then(value => console.log('name: ', value))
}

// 前一个then返回一个Promise对象
export const createThen2 = function() {
  getJSON('test1.json')
  .then(json => getJSON(json.url))
  .then(
    json => console.log('resolved: ', json),
    err => console.log('rejected: ', err)
  )
}

// createThen1()
// createThen2()