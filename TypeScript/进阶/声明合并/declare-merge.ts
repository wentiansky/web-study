// 1. 概念：定义了两个相同的函数、接口或类，会合并为一个类型。
// 2. 函数的合并
// 3. 接口的合并
// 4. 类的合并

/* 2. 函数的合并 */
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
const str = reverse('abc')

/* 3. 接口的合并 */
interface Alarm {
  price: number
  alert(x: string): string
}

interface Alarm {
  weight: number
  alert(x: string, y: number): number
}

/* 4. 类的合并 */
// 与接口合并类似