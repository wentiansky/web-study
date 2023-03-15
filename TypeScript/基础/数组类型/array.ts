// 1. 类型 + 方括号表示法；
// 2. 数组方法的参数也会限制指定的类型；
// 3. 数组泛型；
// 4. 用接口表示数组；
// 5. 类数组(Array-like Object)；
// 6. any在数组中的运用；
const arr1: number [] = [1, 2, 3]
// const arr2: number [] = [1, 2, '3'] // 报错
// arr1.push('3') // 报错

const arr3: Array<number> = [4, 5, 6]

interface NumberArray {
  [index: number]: number // 常用于表示类数组，index为数字时，值也为数字
}
const arr4: NumberArray = [7, 8, 9]

interface IArgs {
  [index: number]: number
  length: number
  callee: Function
}

// 定义类数组接口
function sum(a: number, b: number): number {
  let args: IArgs = arguments
  return args[0] + args[1]
}
sum(1, 2)

// 常见的内置类数组接口：`IArguments`
// interface IArguments {
//   [index: number]: any
//   length: number
//   callee: Function
// }
function sum1(a: number, b: number): number {
  let args: IArguments = arguments
  return args[0] + args[1]
}
sum1(1, 2)

// any
const arr5: any[] = [1, '1', true]