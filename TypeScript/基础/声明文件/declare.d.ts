// 声明全局变量

// 1-1. declare var
export declare var jQueryVar: (selector: string) => any

// 1-2. declare let 可以修改全局变量
export declare let jQueryLet: (selector: string) => any

// 1-3. declare const 不允许修改全局变量(建议使用)
export declare const jQueryConst: (selector: string) => any

// 1-4. declare function
export declare function jQueryFn(selector: string): any
// 支持函数重载
export declare function jQueryFn(domReadyCallback: () => any): any

// 1-5. declare class
export declare class Animal {
  name: string
  constructor(name: string)
  sayHi(): string
}

// 1-6. declare enum
export declare enum Directions {
  Up,
  Down,
  Left,
  Right
}

// 1-7. declare interface(为了防止全局的命名冲突，应该尽可能放在namespace下)
export interface AjaxSettings {
  method?: 'GET' | 'POST'
  data?: any
}

// 1-8. declare namespace
export declare namespace jQueryNS {
  const version: number
  function ajax(url: string, settings?: AjaxSettings): void
  class Event {
    blur(eventType: EventType): void
  }
  enum EventType {
    CustomClick
  }
  // 嵌套的命令空间
  namespace fn {
    function extend(object: any): void
  }
}

// 1-9. 声明合并
export declare function jQuery(selector: string): any
export declare namespace jQuery {
  function ajax(url: string, settings?: AjaxSettings): void
}

// 2-1. export导出变量
export const name: string
export function getName(): string
export interface Options {
  data: any
}

// 或者先declare，再export
declare const name1: string
declare function getName1(): string
// interface前面不需要加declare
interface Options1 {
  data: any
}
export { name1, getName1, Options1 }

// 2-2. export namespace
export namespace foo {
  const name: string
  namespace bar {
    function baz(): string
  }
}

// 2-3. export default(只有function、class、interface可以直接默认导出，其他的需要先定义，再默认导出)
export default function hello(): string

// 2-4. export = (commonjs规范)
declare function world(): string
export = world

// 4. 在 npm 包或 UMD 库中扩展全局变量
declare global {
  interface String {
    prependHello(): string
  }
}

// 5-1. declare module 扩展模块插件
import * as moment from 'moment'
declare module 'moment' {
  export function foo(): moment.CalendarKey
}

// 5-2. 一次性声明多个模块的类型
declare module 'foo' {
  export interface Foo {
    foo: string
  }
}

declare module 'bar' {
  export function bar(): string
}

// 6. 声明文件中的依赖
// 6-1. 书写一个全局变量的声明文件时，使用三斜线指令
/// <reference types="jquery" />
declare function foo(options: JQuery.AjaxSettings): string

// 6-2. 依赖一个全局变量的声明文件
/// <reference types="node" />
export function foo(p: NodeJS.Process): string

// 6-3. 拆分声明文件
// node_modules/@types/jquery/index.d.ts
/// <reference types="sizzle" />
/// <reference path="JQueryStatic.d.ts" />
/// <reference path="JQuery.d.ts" />
/// <reference path="misc.d.ts" />
/// <reference path="legacy.d.ts" />
export = jQuery
// types用于声明对另一个库的依赖，path用于对另一个文件的依赖