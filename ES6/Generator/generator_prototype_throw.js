/**
 * Generator.prototype.throw()
 * 1. 可以在函数体外抛出错误，在Generator函数体内捕获
 * 2. throw方法可以接受一个参数，会被catch接收，建议抛出Error的实例
 * 3. throw方法抛出的错误要被内部捕获，前提是必须执行过一次next方法
 * 4. throw方法被捕获后，会附带执行下一条yield表达式
 * 5. iterator.throw方法与全局throw命令是无关的，互不影响
 */

export const createGeneratorThrow1 = function () {
  const gen = function* () {
    try {
      yield
    } catch (e) {
      console.log('内部捕获: ', e)
    }
  }
  const it = gen()
  it.next()
  try {
    it.throw('a')
    it.throw('b')
  } catch (e) {
    console.log('外部捕获: ', e)
  }
}

export const createGeneratorThrow2 = function () {
  const gen = function* () {
    try {
      yield
    } catch (e) {
      console.log('内部捕获: ', e)
    }
  }
  const it = gen()
  it.next()
  it.throw(new Error('出错了'))
}

// createGeneratorThrow1()
// createGeneratorThrow2()