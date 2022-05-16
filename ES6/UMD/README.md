## UMD(Universal Module Definition)

UMD模式通常尝试提供与当今最流行的脚本加载器的兼容性(例如：RequireJS)，通常使用 `AMD` 作为基础，添加了特殊情况以处理 `CommonJS` 兼容性。

### 常规模块

  * amdWeb.js: 定义一个与 `AMD` 和浏览器全局变量一起使用的模块。
  * returnExport.js: 定义一个在 `Node` 、 `AMD` 和浏览器全局变量中工作的模块。