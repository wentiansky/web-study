# 第一课：jsx转变到dom

## 一、JSX的本质是什么，它和JS之间有什么关系？

> `JSX`是`JavaScript`的一种语法扩展，它和模板语言很接近，但是它充分具备`JavaScript`的能力。

> `JSX`会被`Babel`编译为`React.createElement()`，`React.CreateElement()`将返回一个`ReactElement`的JS对象。

**什么是Babel：**
> `Babel`是一个工具链，主要用于将`ECMAScript 2015+`版本的代码转换为向后兼容的`JavaScript`语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

## 二、为什么要用JSX，不用会有什么后果？
**优点：**
- `JSX`层次分明、嵌套关系清晰；
- 使用类`HTML`标签语法来创建虚拟DOM，提升开发效率；

## 三、createElement()做了什么事情？
```javascript
export function createElement(type, config, children)
```
**createElement的函数流程：**
1. 二次处理`key`、`ref`、`self`、`source`四个属性值；
2. 遍历`config`，筛出可以题进`props`里的属性；
3. 提取子元素，推入`childArray`（即`props.children`）数组；
4. 格式化`defaultProps`；
5. 调用`ReactElement()`；

## 四、ReactElement()做了什么事情？
```javascript
export function ReactElement(type, key, ref, self, source, owner, props)
```
组装了一个element对象，返回给了`React.createElement()`，最终`React.createElement()`返回给了`render`。

## 五、React.render()
```javascript
/**
 * @param { ReactElement } element 需要渲染的元素
 * @param { htmlcollection } container 元素挂载的目标容器，真实DOM
 * @param { Function } callback 处理渲染结束后的逻辑
 * @return 无
 */
export function render(element, container, [callback])

ReactDOM.render(<App />, document.getElementById('root'))
```