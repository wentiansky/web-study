// JavaScript没有空值(void)的概念，在TypeScript中，可以用void表示没有任何返回值的函数
function alertName(): void {
  alert('my name is jax')
}

// 声明一个void类型的变量没什么用，因为只能赋值`undefined`或者`null`(只在--strictNullChecks未指定时)