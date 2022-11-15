/**
 * Generator.prototype.return()
 * 1. 返回一个固定的值并且终结遍历Generator函数
 * 2. 如果return()方法调用时，不提供参数，则返回的value为undefined
 * 3. 如果Generator函数内部有try...finally，正在执行try，return方法会立刻导致进入finally，执行完后，函数结束
 */

export const createGeneratorReturn1 = function () {
  function* gen() {
    yield 1
    yield 2
    yield 3
  }
  const g = gen()
  const step1 = g.next()
  console.log('step1: ', step1)
  const step2 = g.return('foo')
  console.log('step2: ', step2)
  const step3 = g.next()
  console.log('step3: ', step3)
}

export const createGeneratorReturn2 = function () {
  function* numbers() {
    yield 1
    try {
      yield 2
      yield 3
    } finally {
      yield 4
      yield 5
    }
    yield 6
  }
  const g = numbers()
  const step1 = g.next()
  console.log('step1: ', step1)
  const step2 = g.next()
  console.log('step2: ', step2)
  const step3 = g.return(7)
  console.log('step3: ', step3)
  const step4 = g.next()
  console.log('step4: ', step4)
  const step5 = g.next()
  console.log('step5: ', step5)
}

// createGeneratorReturn1()
createGeneratorReturn2()