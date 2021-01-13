# js数据类型

## 一. 数据类型有8种
undefined、null、number、string、boolean、symbol、bigint、object

object：
- Array
- Function
- RegExp
- Date
- Math

> 1.基础类型存储在栈内存，被引用或拷贝时，会创建一个完全相等的变量。

> 2.引用类型存储在堆内存，存储的是地址，多个引用指向同一个地址，这里会涉及一个共享的概念。

## 二、数据类型检测

### 1. typeof
缺点：不能判断具体的对象类型，始终得到`object`。

### 2. instanceof
```javascript
function myInstanceOf(left, right) {
  if (typeof left !== 'object' || left === null) return false
    let proto = Object.getPrototypeOf(left)
    while(true) {
      if (proto === null) return false
      if (proto === right.prototype) return true
      proto = Object.getPrototypeOf(proto)
    }
}
myInstanceOf(new Number(123), Number)
```

### 3. Object.prototype.toString
```javascript

```
