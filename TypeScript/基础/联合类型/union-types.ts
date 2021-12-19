// 联合类型取值可以表示多种类型中的一种
let code: string | number = '10'
code = 10
code = true

// 访问非公有属性或方法会报错
function getLength (something: number | string): number {
  return something.length
}

// 访问公有属性或方法
function getString (something: number | string): string {
  return something.toString()
}