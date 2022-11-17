/**
 * yield*表达式
 * 1. 在一个Generator函数里面执行另一个Generator函数
 * 2. 只要数据接口具有Iterator接口，就可以被yield*遍历
 */

export const createYield1 = function () {
  function* foo() {
    yield 'a'
    yield 'b'
  }
  function* bar() {
    yield 'x'
    yield* foo()
    yield 'y'
  }
  for (const value of bar()) {
    console.log('方式一: ', value)
  }
}

// 等同于
export const createYield2 = function () {
  function* bar() {
    yield 'x'
    yield 'a'
    yield 'b'
    yield 'y'
  }
  for (const value of bar()) {
    console.log('方式二: ', value)
  }
}

// 等同于
export const createYield3 = function () {
  function* foo() {
    yield 'a'
    yield 'b'
  }
  function* bar() {
    yield 'x'
    for (const value of foo()) {
      yield value
    }
    yield 'y'
  }
  for (const value of bar()) {
    console.log('方式三: ', value)
  }
}

// createYield1()
// createYield2()
// createYield3()