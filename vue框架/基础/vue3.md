# vue3

## 1. createApp()
返回应用实例

## 2. mount()
返回组件实例，相当于vue2.x的`this`

## 3. vue3更改内容

**1. GLOBAL API**
**2. 模板指令**
**3. 组件**
**4. 渲染函数**

- `Add`：异步组件使用`defineAsyncComponent()`方法定义；
- `Add`：`emits`选项；
- `Add`：组件支持多根节点（片段）；
- `Update`： v-for中的`ref`不再是数组；
- `Update`：Boolean类型attribute的强制行为；
- `Update`：`$attrs`现在包含`class`和`style`；
- `Update`：自定义指令生命周期与组件一致；
- `Update`：自定义元素跳过Vue编译，`is`属性只在`component`中起作用；
- `Update`：`data`选项只能返回函数；
- `Update`：函数式组件定义调整；
- `Update`：全局API `createApp`；
- `Update`：全局API `treeShaking`；
- `Update`：`key attribute`；
- `Update`：按键修饰符；
- `Update`：在`prop`的默认值工厂函数中不能再访问`this`；
- `Update`：渲染函数`API`；
- `Update`：`Slot`统一；
- `Update`：`transition`的类名更改；
- `Update`：`transition group`不再需要默认的根元素；
- `Update`：`v-model`；
- `Update`：`v-if`比`v-for`拥有更高的优先级；
- `Update`：`v-bind`的合并行为；
- `Update`：监听数组的变化，必须设置`deep: true`；
- `Delete`：`$children`已移除；
- `Delete`：实例的`$on`、`$off`和`$once`方法已移除；
- `Delete`：`filter`过滤器已移除；
- `Delete`：移除`inline-template`属性，使用`slot`替换；
- `Delete`：移除`$listeners`；
- `Delete`：`v-on.native`修饰符已移除;