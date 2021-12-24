// 1. 类型断言(Type Assertion)可以手动指定值的类型;
// 2. 语法;
//   2-1. 值 as 类型 (建议使用);
//   2-2. <类型> 值;
// 3. 用途；
//   3-1. 将联合类型断言为其中一个类型;
//   3-2. 将一个父类断言为一个具体的子类;
//   3-3. 将any断言为一个具体的类型;
// 4. 类型断言的限制;
// 5. 双重断言(一般不使用);
// 6. 类型断言 VS 类型转换；
// 7. 类型断言 VS 类型声明；
// 8. 类型断言 VS 泛型；

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

// 由于ApiError和HttpError是类，可以使用更合适的instanceof来判断
function isApiError1(error: Error) {
  if (error instanceof ApiError) {
    return true
  }
  return false
}

// 如果ApiError和HttpError是接口，就不适用instanceof来判断了
interface ApiError1 extends Error {
  code: number
}

interface HttpError1 extends Error {
  statusCode: number
}
const apiErr: ApiError1 = {
  code: 400,
  name: '',
  message: '',
}

// 将任何一个类型断言为any
window.foo = 1(
  // 报错
  window as any
).foo = 2

// 将any断言为一个具体的类型
function getCacheData(key: string): any {
  return (window as any).cache[key]
}
interface Dog {
  name: string
}

const dog = getCacheData('wangchai') as Dog
console.log(dog.name)

// 类型兼容
interface Animal1 {
  name: string;
}
interface Cat1 {
  name: string;
  run(): void;
}

interface Fish1 {
  name: string
  swim(): void
}
// 等价于
interface Cat1 extends Animal1 {
  run(): void;
}
// Animal1兼容Cat1，可以互相类型断言

// 双重断言
function testCat1(cat: Cat1) {
  return (cat as any as Fish1)
}
// ***************************例子***************************
