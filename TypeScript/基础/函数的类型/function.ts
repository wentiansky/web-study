// 1. 函数声明
// 2. 函数表达式
// 3. 用接口定义函数的形状
// 4. 可选参数
// 5. 参数默认值
// 6. 剩余参数
// 7. 重载

//函数声明
function sum(x: number, y: number): number {
  return x + y
}
sum(1, 2)

// 函数表达式
// TS中`=>`表示函数定义，与ES6中的箭头函数不同
let mySum: (x: number, y:number) => number = function(x: number, y: number): number {
  return x + y
}
mySum(1, 2);

// 用接口定义函数的形状
// 采用`函数表达式` | `接口定义函数`的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1
}

// 可选参数
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}
let tomcat = buildName('tom', 'cat')
let tom = buildName('tom')

// 默认值
function buildNameDefault(firstName: string, lastName: string = 'cat') {
  return firstName + ' ' + lastName
}

let tomcat1 = buildName('tom', 'cat')
let tom1 = buildName('tom')

// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(item => {
    array.push(item)
  })
}
push([], 1, 2, 3)

// 重载
// 可以利用联合类型，缺点：输出类型不明确
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
      return String(x).split('').reverse().join('')
  } else if (typeof x === 'string') {
      return x.split('').reverse().join('')
  }
}

// 使用函数重载
function reverse1(x: number): number
function reverse1(x: string): string
function reverse1(x: number | string): number | string | void {
  if (typeof x === 'number') {
      return String(x).split('').reverse().join('')
  } else if (typeof x === 'string') {
      return x.split('').reverse().join('')
  }
}