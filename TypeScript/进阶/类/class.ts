// - 类（Class）：定义了一件事物的抽象特点，包含属性和方法；
// - 对象（Object）：类的实例，通过new生成；
// - 面向对象（OOP）的三大特性：封装、继承、多态；
// - 封装（Encapsulation）：将对数据的操作细节隐藏起来。只暴露对外的接口。外界调用端不需要（也不可能）知道细节，
//   就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意修改对象内部的数据；
// - 继承（Inheritance）：子类继承父类，子类除了拥有父类的特性外，还有一些更具体的特性；
// - 多态（polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的实现；
// - 存取器（getter/setter）：用以改变属性的读取和赋值行为；
// - 修饰符（Modifiers）：如public共有的属性或方法、private私有的属性或方法；
// - 抽象类（Abstract Class）：抽象类是其他继承类的基类，不允许被实例化，抽象类中的抽象方法必须在子类中实现；
// - 接口（interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口，接口可以被类实现，一个类只能继承自另一个类，但是可以实现多个接口；

/***  public/private/protected修饰符的使用 ***/
class Animal1 {
  // public name： sring // 可以直接在构造参数中使用修饰符
  private age
  protected sex // 允许子类访问
  readonly height // 只允许出现在属性声明或索引签名或构造函数中

  // 当构造函数为private时，Animal类不能被继承或实例化
  // 当构造函数为protected时，Animal类只能被继承
  public constructor(public name, age, sex, height) {
    this.name = name
    this.age = age
    this.sex = sex
    this.height = height
  }
  sayHi() {
    return this.name
  }
}

let animal1: Animal1 = new Animal1('Jack', 27, 'male', 190)
console.log('Animal name: ', animal1.name) // Jack
// console.log('age', animal1.age) // 报错
// animal1.age = '30' // 报错
animal1.name = 'Tom'
console.log('Animal name: ', animal1.name) // Tom
// console.log('Animal sex: ', animal1.sex) // 报错
// animal1.height = 184 // 报错

class Cat1 extends Animal1 {
  constructor(name, age, sex, height) {
    super(name, age, sex, height)
    console.log('Cat name: ', this.name)
    console.log('Cat sex: ', this.sex)
    // console.log('Cat age: ', this.age) // 报错
  }
}

let cat1: Cat1 = new Cat1('diandian', 2, 'female', 182)


/***  abstract抽象类的使用 ***/
abstract class Animal2 {
  public name
  constructor(name) {
    this.name = name
  }
  public abstract sayHi()
}

// let animal2: Animal2 = new Animal2('Jack') // 报错：抽象类不允许实例化

class Cat2 extends Animal2 {
  public eat() {
    console.log(`${ this.name } is eating`)
  }
  public sayHi() {
    console.log(`My name is ${ this.name }`)
  }
}

let cat2: Cat2 = new Cat2('Tom')