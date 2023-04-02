// 1. 概念：泛型指在定义函数、接口和类的时候，不预先指定具体的类型，等到使用的时候再指定类型
// 2. 多个类型参数
// 3. 泛型约束
// 4. 泛型接口
// 5. 泛型类
// 6. 泛型参数的默认类型

/* 1. 概念 */
function createArray1(length: number, value: any): Array<any> {
  let result = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray1(3, 'x')

function createArray2<T>(length: number, value: T): Array<T> {
  let result: Array<T> = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

createArray2<string>(3, 'y')

/* 2. 多个类型参数 */
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

/* 3. 泛型约束 */
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id]
  }
  return target
}

let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }))

/* 4. 泛型接口 */
// 复习例子
interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}

// 泛型接口例子
interface CreateArrayFunc1 {
  <T>(length: number, value: T): Array<T>
}

// 或者这样写
interface CreateArrayFunc2<T> {
  (length: number, value: T): Array<T>
}

let createArray3: CreateArrayFunc1
let createArray4: CreateArrayFunc2<string>
createArray3 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray4 = function<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}

console.log(createArray3(3, 'x'))
console.log(createArray4(3, 'y'))

/* 5. 泛型类 */
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0

/* 6. 泛型参数的默认类型 */
function createArray5<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}
