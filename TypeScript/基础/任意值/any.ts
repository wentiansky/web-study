let anyVar: any = 'string'
anyVar = 10

// 在任意值上访问任意属性和方法都是允许的
console.log(anyVar.myName)
console.log(anyVar.myName.firstName)
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值

const str = '{ "name": "jax" }'
const user: unknown = JSON.parse(str)
interface User {
  name: string
}

// 类型守卫
const isUser = (user: any): user is User => {
  return typeof user.name === 'string'
}

if (isUser(user)) {
  console.log(user.name.length)
}