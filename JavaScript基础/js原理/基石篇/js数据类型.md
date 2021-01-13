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
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call(document) // "[object HTMLDocument]"

function getType(arg) {
  const type = typeof arg
  if (type != 'object') return type
  return Object.prototype.toString.call(arg).replace(/^\[object (\S+)\]$/, '$1')
}
```

## 三、强制类型转换
强制类型转换的方法有：Number()、parseInt()、parseFloat()、toString()、String()、Boolean()。
### 1. Number()方法强制转换
- 如果是null => 0；
- 如果是undefined => NaN；
- 如果是数字 => 自身；
- 如果是布尔值，true => 1，false => 0；
- 如果是字符串：
  - 只包含数字 => 转换成10进制；
  - 包含浮点格式 => 转换成浮点值；
  - 空字符串 => 0；
  - 均不是 => NaN；
- 如果是Symbol => 抛出错误；
- 如果是对象：
  - 存在[Symbol.toPrimitive]，调用此方法；
  - 否则调用valueOf()方法；
  - 否则调用toString()方法；

### 2. Boolean()方法强制转换
- 除了undefined、null、NaN、false、0、''，转换成`false`，其他都是`true`

## 四、隐式类型转换
- 通过逻辑运算符：&&、||、!；
- 运算符：+、-、*、/；
- 关系操作符：>、<、<=、>=；
- 相等运算符：==；
- 条件：if、while

### 1. `==`的隐式转换规则
- 其中一个为null或者undefined，另一个必须为null或undefined，才返回true，否则返回false；
- 其中一个是Symbol类型，返回false；
- 两个都是string和number类型，将string转成number；
- 其中一个是boolean，将boolean转成number；
- 其中一个是object，将object转成原始类型再判断；

### 2. `+`的隐式转换规则
- 其中一个是字符串，另外一个是undefined、null或boolean，调用toString()方法进行字符串拼接，如果是对象、数组、正则，调用对象转换方法，再拼接；
- 其中一个是数字，另外一个是undefined、null、boolean，转成数字再运算；