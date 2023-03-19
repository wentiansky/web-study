// 1. 声明全局变量;
//  1-1. declare var;
//  1-2. declare let;
//  1-3. declare const;
//  1-4. declare function;
//  1-5. declare class;
//  1-6. declare enum;
//  1-7. interface和type;
//  1-8. declare namespace(已淘汰);
//  1-9. 声明合并;

// 2. npm包;
// * 查看package.json的types字段, 查看包中的index.d.ts;
// * 安装@types/<包名> npm包查看;
// * 创建一个 node_modules/@types/<包名>/index.d.ts 文件(临时测试);
// * 创建一个 types目录, 如types/<包名>/index.d.ts, 需配置tsconfig.json中的path和baseUrl字段;
//  2-1. export导出变量
//  2-2. export namespace导出(含有子属性的)对象
//  2-3. export default ES6默认导出
//  2-4. export = commonjs导出模块

// 3. 直接扩展全局变量

// 4. 在 npm 包或 UMD 库中扩展全局变量

// 5. declare module
//  5-1. 扩展模块插件
//  5-2. 一次性声明多个模块的类型

// 6. 声明文件中的依赖
//  6-1. 书写一个全局变量的声明文件时，使用三斜线指令
//  6-2. 依赖一个全局变量的声明文件

// 7. 自动生成声明文件

// 8. 发布声明文件
//  8-1. 将声明文件和源码放在一起(建议)
//  8-2. 将声明文件发布到`@types`下

import {
  jQueryVar,
  jQueryFn,
  Animal,
  Directions,
  jQueryNS,
  AjaxSettings,
  jQuery,
  name,
  getName,
  Options,
  foo,
} from './declare.d'
import hello from './declare.d'

// 1-1. use var
jQueryVar('#foo')

// 1-2. use let
declare let jQueryLet: (selector: string) => any
jQueryLet = function(selector) {
  return document.querySelector(selector)
}

// 1-3. use const
declare const jQueryConst: (selector: string) => any
jQueryConst = function(selector) {
  return document.querySelector(selector)
}

// 1-4. use function
jQueryFn('#foo')
jQueryFn(function () {
  alert('Dom Ready!')
})

// 1-5. use class
const cat = new Animal('Tom')

// 1-6. use enum
const directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
]

// 1-7. interface
var settings: AjaxSettings = {
  method: 'POST',
  data: {
    name: 'foo'
  }
}

// 1-8. use namespace
console.log('version: ', jQueryNS.version)
jQueryNS.ajax('/api/login', settings)
const event = new jQueryNS.Event()
event.blur(jQueryNS.EventType.CustomClick)
jQueryNS.fn.extend({
  check: function() {
    return this.each(function() {
        this.checked = true;
    })
  }
})

// 1-9. 声明合并
jQuery('#foo')
jQuery.ajax('/api/login', settings)

// 2-1. export导出变量
console.log(name)
let myName = getName()
let options: Options = {
  data: {
    name: 'foo'
  }
}

// 2-2. export namespace
console.log(foo.name)
foo.bar.baz()

// 2-3. export default
hello()

// 3. 直接扩展全局变量
interface String {
  prependHello(): string
}

// 4. 在 npm 包或 UMD 库中使用扩展全局变量的方法prependHello()
'hello'.prependHello()

// 5-1. declare module 扩展模块插件
import * as moment from 'moment'
import 'moment-plugin'
moment.foo()

// 5-2. 一次性声明多个模块的类型
import { Foo } from 'foo'
import * as bar from 'bar'
let f: Foo
bar.bar()

// 6. 声明文件中的依赖
// 6-1. 书写一个全局变量的声明文件时，使用三斜线指令
foo({})

// 6-2. 依赖一个全局变量的声明文件
import { foo } from 'node-plugin'
foo(global.process)

// 6-3. 拆分声明文件