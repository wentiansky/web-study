### 导入整个模块内容

```javascript
// myModule作为命名空间
import * as myModule from '/modules/my-module.js'

// 调用导出模块的接口
myModule.doSomeThing()
```

### 导入单个接口

```javascript
import { myExport } from '/modules/my-module.js'
```

### 导入多个接口

```javascript
import { foo, bar } from '/modules/my-module.js'
```

### 导入带有别名的接口

```javascript
import { foo as fooNew } from '/modules/my-module.js'
```

### 导入时重命名多个接口

```javascript
import { foo as fooNew, bar as barNew } '/modules/my-module.js'
```

### 仅为副作用导入一个模块

```javascript
import '/modules/my-module.js'
```

### 导入默认值

```javascript
// 直接导入默认值
import myDefault from '/modules/my-module.js'

// 同时将default语法与命名空间导入一起使用
import myDefault, * as myModule from '/modules/my-module.js'

// 同时将default语法与命名导入一起使用
import myDefault, { foo, bar } from '/modules/my-module.js'

// 动态导入默认值，需要从返回的对象中解构并重命名"default"键
(async () => {
  if (somethingIsTrue) {
    const { default: myDefault, foo, bar } = await import '/modules/my-module.js'
  }
})()
```

### 动态import

标准import无法做到按需编译，降低首页加载速度。某些场景，需要根据条件导入模块或者按需导入模块。

  - 当静态导入的模块很明显的降低了代码的加载速度且被使用的可能性很低，或者并不需要马上使用它。
  - 当静态导入的模块很明显的占用了大量系统内存且被使用的可能性很低。
  - 当被导入的模块，在加载时并不存在，需要异步获取。
  - 当导入模块的说明符，需要动态构建（静态导入只能使用静态说明符）。
  - 当被导入的模块有副作用（这里说的副作用，可以理解为模块中会直接运行的代码），这些副作用只有在触发了某些条件才被需要时。

```javascript
import('/modules/my-module.js').then(module => {
  // ...
})

let module = await import('/modules/my-module.js')
```