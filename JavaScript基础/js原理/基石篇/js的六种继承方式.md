# js的六种继承方式

## 1. 第一种：原型链继承
原型链继承是比较常见的继承方式之一，其中涉及的构造函数、原型和实例，三者之间存在着一定的关系，即每一个构造函数都有一个原型对象，原型对象又包含一个指向构造函数的指针，而实例则包含一个原型对象的指针。
```javascript
function Parent1() {
  this.name = 'parent1'
  this.play = [1, 2, 3]
}

function Child1() {
  this.type = 'child1'
}

Child.prototype = new Parent()
var s1 = new Child1()
var s2 = new Child1()
s1.play.push(4)
console.log(s1.play) // [1, 2, 3, 4]
console.log(s2.play) // [1, 2, 3, 4]
```
**缺点：多个实例共享一个原型对象，当一个实例变化时，另一个也随着变化**

## 2. 第二种：构造函数继承(call)
```javascript
function Parent2() {
  this.name = 'Parent2'
}

Parent2.prototype.getName = function() {
  return this.name
}

function Child2() {
  Parent2.call(this)
  this.type = 'child2'
}

let child2 = new Child2()
console.log(child2)
console.log(child2.getName())
```
**优点：使父类的引用属性不会被共享，优化第一种继承方式的弊端。**
**缺点：只能继承父类的属性和方法，不能继承原型属性或方法。**

## 3. 第三种：组合继承（前两种组合）
```javascript
function Parent3() {
  this.name = 'Parent3'
  this.play = [1, 2, 3]
}

Parent3.prototype.getName = function () {
  return this.name
}

function Child3() {
  Parent3.call(this) // 第二次调用Parent3()
  this.type = 'child3'
}

Child3.prototype = new Parent3() // 第一次调用Parent3()
let s3 = new Child3()
let s4 = new Child3()
s3.play.push(4)
console.log(s3.play)
console.log(s4.play)
console.log(s3.getName())
console.log(s4.getName())
```
**缺点：`Parent3()`执行了两次，多进行了一次性能开销。**

## 4. 第四种：原型式继承 - Object.create()
```javascript
let parent4 = {
  name: 'parent4',
  friends: ['p1', 'p2', 'p3'],
  getName: function() {
    return this.name
  }
}

let person4 = Object.create(parent4)
person4.name = 'tom'
person4.friends.push('bob')

let person5 = Object.create(parent4)
person5.friends.push('lys')
console.log(person4.name)
console.log(person4.name === person4.getName())
console.log(person5.name)
console.log(person4.friends)
console.log(person5.friends)
```

## 5. 第五种：寄生式继承
使用原型式可以获得一份目标对象的浅拷贝，然后利用这个浅拷贝再进行增强，添加一些方法，这样的继承方式就叫作寄生式继承。
```javascript
let parent5 = {
  name: 'parent5',
  friends: ['p1', 'p2', 'p3'],
  getName: function() {
    return this.name
  }
}

function clone(origin) {
  let clone = Object.create(origin)
  clone.getFriends = function() {
    return this.friends
  }
  return clone
}

let person6 = clone(parent5)
console.log(person6)
console.log(person6.getName())
console.log(person6.getFriends())
```

## 6. 第六种：寄生组合式继承
相对最优的继承方式。
```javascript
function clone(parent, child) {
  // 这里改用Object.create可以减少组合继承中多进行一次构造的过程
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}

function Parent6() {
  this.name = 'parent6'
  this.play = [1, 2, 3]
}

Parent6.prototype.getName = function() {
  return this.name
}

function Child6() {
  Parent6.call(this)
  this.friend = 'child6'
}

clone(Parent6, Child6)

Child6.prototype.getFriends = function() {
  return this.friend
}

let child6 = new Child6()
console.log(child6)
console.log(child6.getName())
console.log(child6.getFriends())
```

## 7. ES6的extend关键字实现逻辑
```javascript
class PersonX {
  constructor(name) {
    this.name = name
  }

  // 原型方法
  getName = function() {
    console.log('Person:', this.name)
  }
}

class Gamer extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}

const smis = new Gamer('lys', 20)
console.log(smis.getName())
```