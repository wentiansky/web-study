// 声明全局变量

// 1. declare var
export declare var jQueryVar: (selector: string) => any

// 2. declare let 可以修改全局变量
export declare let jQueryLet: (selector: string) => any

// 3. declare const 不允许修改全局变量(建议使用)
export declare const jQueryConst: (selector: string) => any

