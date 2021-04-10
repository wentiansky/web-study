# js深浅拷贝

## 1. 浅拷贝

### 1.1 什么是浅拷贝
> 创建一个新的对象，如果原对象的属性是基本数据类型，就复制属性的值，如果原对象的属性是引用类型，就拷贝属性的地址，其中一个对象地址改变了，会影响另一个对象。

### 1.2 实现浅拷贝的方法

#### 1.2.1 Object.assign()
语法：Object.assign(target, ..., sources)；
**注意事项：**
- *不会拷贝对象的继承属性；*
- *不会拷贝对象的不可枚举属性；*
- *可以拷贝Symbol类型的属性；*

#### 1.2.2 `...`扩展运算符
扩展运算符和`Object.assign`有同样的缺陷。

#### 1.2.3 Array.concat()
```javascript
let newArr = [1, 2, 3].concat()
```

#### 1.2.4 Array.slice()
语法：Array.slice(start, end)
```javascript
let newArr = [1, 2, 3].slice()
```
#### 1.2.5 手写一个浅拷贝
```javascript
const shadowClone = target => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop]
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
```

## 2. 深拷贝

### 2.1 什么是深拷贝
> 将一个对象从内存中完整地拷贝一份给目标对象，并在堆内存中开辟新的空间存放新对象，新对象的修改不会改变原对象，实现真正的分离。

### 2.2 实现深拷贝的方法

#### 2.2.1 JSON.parse(JSON.stringify(target))
缺点：
- 不会拷贝`undefined`、`symbol`、`function`数据类型；
- 会将`NaN`、`Infinity`、`-Infinity`，变成`null`；
- 拷贝`Date`类型会转成字符串；
- 拷贝`RegExp`类型会变成空对象；
- 无法拷贝不可枚举的属性；
- 无法拷贝对象的原型链；
- 无法解决循环引用问题；
```javascript
// 例子
var obj = {
  und: undefined, // => 无
  sym: Symbol(1), // => 无
  fn: function() { console.log(1) }, // => 无
  date: new Date(), // => String
  reg: /\d/, // => {}
  nan: NaN, // => null
  infinity: Infinity // => null
}
Object.defineProperty(obj, 'innumerable', {
  enumerable: false,
  value: 'innumerable'
})
// obj.self = obj
console.log(JSON.parse(JSON.stringify(obj)))
```

#### 2.2.2 手写递归实现（基础版）
```javascript
var obj = {
  a: 1,
  b: { c: 2 }
}
function deepClone(target) {
  if (typeof target === 'object' && target !== null) {
    let cloneTarget = {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        if (typeof target[prop] === 'object' && target[prop] !== null) {
          cloneTarget[prop] = deepClone(target[prop])
        } else {
          cloneTarget[prop] = target[prop]
        }
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
var obj2 = deepClone(obj)
```
缺点：
- 不能拷贝`symbol`类型；
- 不能拷贝不可枚举的属性；
- 只能拷贝普通对象，不能正确地拷贝`Array`、`Date`、`RegExp`、`Function`、`Error`；
- 不能解决循环引用问题；

#### 2.2.3 改进后递归实现（进阶版）
要点：
- 可以使用`Reflect.ownKeys()`，遍历不可枚举类型和`Symbol`；
- 对于`Date`和`RegExp`类型，生成新的实例返回；
- 使用`Object.getOwnPropertyDescriptors()`获得对象的属性和描述，结合`Object.create()`创建一个新对象，继承传入的原型链；
- 使用`WeakMap`弱类型引用，作为Hash表，可以有效防止内存泄漏，如果存在循环引用，则直接返回WeakMap存储的值；
```javascript
const isComplexType = target => (typeof target === 'object' || typeof target === 'function' && (typeof target !== null))

const deepClone = (target, hash = new WeakMap()) => {
  if (target.constructor === Date) return new Date(target)
  if (target.constructor === RegExp) return new RegExp(target)
  if (hash.has(target)) return hash.get(target)
  let allDesc = Object.getOwnPropertyDescriptors(target)
  let cloneTarget = Object.create(Object.getPrototypeOf(target), allDesc)
  hash.set(target, cloneTarget)
  for (let prop in Reflect.ownKeys(target)) {
    cloneTarget[prop] = (isComplexType(target[prop]) && typeof target[prop] !== 'function') ? deepClone(target[prop], hash) : target[prop]
  }
  return cloneTarget
}

let obj = {
  num: 0, //
  str: '', //
  boolean: true, //
  unf: undefined, //
  nul: null, //
  obj: { name: '我是一个对象', id: 1 }, //
  arr: [0, 1, 2], //
  func: function () { console.log('我是一个函数') }, //
  date: new Date(0), //
  reg: new RegExp('/我是一个正则/ig'), //
  [Symbol('1')]: 1, //
};
Object.defineProperty(obj, 'innumerable', {
  enumerable: false,
  value: '不可枚举属性'
}); //
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj)) //
obj.loop = obj //
let cloneObj = deepClone(obj)
console.log('cloneObj', cloneObj)
```