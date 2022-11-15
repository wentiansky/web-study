/**
 * Generator
 * 1. function关键词与函数名之间有一个*号
 * 2. 函数内部使用yield(暂停标记)表达式，定义不同的内部状态
 * 3. 返回指向内部状态的指针对象(即Iterator对象)
 * 4. 调用Iterator的next方法，指向下一个状态
 */

export const createGenerator1 = function () {
  function* hello() {
    yield 'hello'
    yield 'world'
    return 'ending'
  }
  const res = hello()
  const step1 = res.next()
  console.log('step1: ', step1)
  // { value: 'hello', done: false }
  const step2 = res.next()
  console.log('step2: ', step2)
  // { value: 'world', done: false }
  const step3 = res.next()
  console.log('step3: ', step3)
  // { value: 'ending', done: true }
  const step4 = res.next()
  console.log('step4: ', step4)
  // { value: undefined, done: true }
}

// 单纯的暂缓执行函数
export const createGenerator2 = function () {
  function* f() {
    console.log('执行了')
  }
  const res = f()

  setTimeout(() => {
    res.next()
  }, 2000)
}

export const createGenerator3 = function () {
  const arr = [1, [[2, 3], 4], [5, 6]];
  function* flat(a) {
    const length = a.length;
    for (let i = 0; i < length; i++) {
      const item = a[i];
      if (typeof item !== 'number') {
        yield* flat(item);
      } else {
        yield item
      }
    }
  };
  
  for (const i of flat(arr)) {
    console.log(i);
  }
  // 1, 2, 3, 4, 5, 6
}

export const createGenerator4 = function() {
  function* demo() {
    console.log('hello' + (yield 123))
  }
  const res = demo()
  const step1 = res.next()
  console.log('step1: ', step1)
  const step2 = res.next()
  console.log('step2: ', step2)
}

export const createGenerator5 = function() {
  const myIterable = {}
  myIterable[Symbol.iterator] = function* ()  {
    yield 1
    yield 2
    yield 3
  }
  console.log('myIterable: ', [...myIterable])
}

// next方法可以传入参数，设置上一次yield表达式的值
// 第一次向next方法传参，会被浏览器忽略
export const createGenerator6 = function() {
  function* foo(x) {
    // const y = 2 * (yield(x + 1))
    const y = 2 * (yield 6)
    const z = yield(y / 3)
    return (x + y + z)
  }
  const a = foo(5)
  console.log('a.next1: ', a.next()) // { value: 6, done: false }
  console.log('a.next2: ', a.next()) // {value: NaN, done: false }
  console.log('a.next3: ', a.next()) // {value: NaN, done: false }

  const b = foo(5)
  console.log('b.next1: ', b.next()) // { value: 6, done: false }
  console.log('b.next2: ', b.next(12)) // {value: 8, done: false }
  console.log('b.next3: ', b.next(13)) // {value: 42, done: false }
}

// 向Generator函数内部输入值
export const createGenerator7 = function() {
  function* dataConsumer() {
    console.log('started')
    console.log(`1. ${yield}`)
    console.log(`2. ${yield}`)
    return 'result'
  }
  let genObj = dataConsumer()
  genObj.next() // started
  genObj.next('a') // 1. a
  genObj.next('b') // 2. b
}

// 第一次调用next方法，能够输入值
export const createGenerator8 = function() {
  function wrapper(generatorFunction) {
    return function(...args) {
      let generatorObject = generatorFunction(...args)
      generatorObject.next()
      return generatorObject
    }
  }
  const wrapped = wrapper(function* () {
    console.log(`First input: ${ yield }`)
    return 'DONE'
  })
  wrapped().next('hello')
}

// 用for...of遍历对象(第一种方式)
export const createGenerator9 = function() {
  let jane = { first: 'Jane', last: 'Doe' }
  function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj)
    for(let propKey of propKeys) {
      yield [propKey, obj[propKey]]
    }
  }
  console.log('第一种方式: ')
  for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`)
  }
}

// 用for...of遍历对象(第二种方式)
export const createGenerator10 = function() {
  let jane = { first: 'Jane', last: 'Doe' }
  function* objectEntries() {
    let propKeys = Object.keys(this)
    for(let propKey of propKeys) {
      yield [propKey, this[propKey]]
    }
  }
  jane[Symbol.iterator] = objectEntries
  console.log('第二种方式: ')
  for (let [key, value] of jane) {
    console.log(`${key}: ${value}`)
  }
}

// createGenerator1()
// createGenerator2()
// createGenerator3()
// createGenerator4()
// createGenerator5()
// createGenerator6()
// createGenerator7()
// createGenerator8()
// createGenerator9()
// createGenerator10()