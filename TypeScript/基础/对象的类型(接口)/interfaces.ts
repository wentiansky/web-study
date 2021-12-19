// 1. 除了对类的一部分行为进行抽象以外，也常用于对对象的形状进行描述；
// 2. 赋值的时候，变量的形状必须和接口的形状保持一致(对象属性必须保持一致)；
// 3. 可选属性(非严格模式下，可以为`undefined`)；
// 4. 任意属性(可以使用联合类型)；
// 5. 只读属性；
interface Person {
  name: string
  age: number
  gender?: string // 可选属性
  // [propName: string]: any // 任意属性
  [propName: string]: string | number // 任意属性-联合类型
  readonly id: number
}

const jax: Person = {
  name: 'jax',
  age: 26,
  // gender: 'male',
  // gender: undefined,
  abc: 'abc',
  id: 100
}

// jax.id = 200 // 不允许重新赋值id