// 1. 类型断言(Type Assertion)可以手动指定值的类型;
// 2. 语法;
//   2-1. 值 as 类型 (建议使用);
//   2-2. <类型> 值;
// 3. 用途；
//   3-1. 将联合类型断言为其中一个类型;
//   3-2. 将一个父类断言为一个具体的子类；

// ***************************例子***************************
// 2-1. 语法1(建议)
let a = 1 as number

// 2-2. 语法2
let b = <number>1

// 3-1. 用途1——将联合类型断言为其中一个类型
interface Cat {
  name: string
  run(): void
}

interface Fish {
  name: string
  swim(): void
}

function getName(animal: Cat | Fish): string {
  return animal.name
}

const catName = getName({
  name: 'diandian',
  run: function () {
    console.log('run')
  },
})

const fishName = getName({
  name: 'jiyu',
  swim: function () {
    console.log('swim')
  },
})

// function isFish1(animal: Cat | Fish) {
//   // 直接判断会报错，因为Cat没有swim函数
//   if (typeof animal.swim === 'function') {
//     return true
//   }
//   return false
// }

// 尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误
function isFish2(animal: Cat | Fish) {
  if (typeof (animal as Fish).swim === 'function') {
    return true
  }
  return false
}

// 3-2. 将一个父类断言为更加具体的子类
class ApiError extends Error {
  code: number = 0
}

class HttpError extends Error {
  statusCode: number = 200
}

function isApiError(error: Error) {
  if (typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}
// ***************************例子***************************
