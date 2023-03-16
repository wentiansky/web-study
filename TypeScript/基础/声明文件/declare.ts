// 1. 声明全局变量;
//   1-1. declare var/let/const;
//   1-2. declare function;
//   1-3. declare class;
//   1-4. declare enum;
//   1-5. declare namespace(已淘汰);
//   1-6. interface和type;
// 2. npm包;
//   2-1. 查看package.json的type字段, 查看包中的index.d.ts;
//   2-2. 安装@types npm包查看;
//   2-3. 创建一个 node_modules/@types/foo/index.d.ts 文件(临时测试);
//   2-4. 创建一个 types目录, 如types/foo/index.d.ts, 需配置tsconfig.json中的path和baseUrl字段;
import { jQueryVar, jQueryLet, jQueryConst } from './declare-var-let-const'
import { jQueryFn } from './declare-function'

// 1-1. declare var
jQueryVar('#foo')

// 1-1. declare let
jQueryLet = function(selector) {
  return document.querySelector(selector)
}

// 1-1. declare const
jQueryConst = function(selector) {
  return document.querySelector(selector)
}

// 1-2. declare function
jQueryFn('#foo')
jQueryFn(function () {
  alert('Dom Ready!')
})

// declare class
declare class Animal {
  constructor(name: string)
  name: string
  sayHi(): string
}

const cat = new Animal('Tom')

// declare enum
declare enum Directions {
  Up,
  Down,
  Left,
  Right,
}

const directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
]

// declare namespace
// declare namespace jQuery1 {
//   const verson: number
//   function ajax(url: string, options?: any): void
//   class Event {
//     blur(eventType: EventType): void
//   }
// }

// interface
interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any
}

// export types/foo/index.d.ts
export const name: string = 'jax'
export function getName(): string
export interface Options {
  data: any
}

// 先declare，再export
declare const name1: string
declare function getName1(): string
interface Options1 {
  data: any
}
export { name1, getName1, Options1 }

// import src/index.ts
import { name, getName, Options, name1, getName1, Options1 } from 'foo'

// export default
// 只有function、class、interface可以直接默认导出

// commonjs规范导出
module.exports = foo // 整体导出
exports.bar = bar // 单个导出

const foo = require('foo') // 整体导入
const bar = require('foo').bar // 单个导入

import * as foo from 'foo' // 整体导入
import { bar } from 'foo' // 单个导入

import foo = require('foo') // 整体导入
import bar = foo.bar // 单个导入

// commonjs规范使用export = 
export = foo
declare function foo(): string
declare namespace foo {
  const bar: string
}

// 扩展全局变量类型
declare global {
  interface String {
    foo(): string
  }
}
export {} // 默认导出空对象

// 扩展模块插件
import * as moment from 'moment'
declare module 'moment' {
  export const name: string
}

// 需要引入全局变量的声明文件时，使用三斜线指令
/// <reference types="node" />

// 拆分声明文件
// node_modules/@types/jquery/index.d.ts
/// <reference types="sizzle" />
/// <reference path="JQueryStatic.d.ts" />
/// <reference path="JQuery.d.ts" />
/// <reference path="misc.d.ts" />
/// <reference path="legacy.d.ts" />
// types用于声明对另一个库的依赖，path用于对另一个文件的依赖
