var anyVar = 'string';
anyVar = 10;
// 在任意值上访问任意属性和方法都是允许的
console.log(anyVar.myName);
console.log(anyVar.myName.firstName);
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
