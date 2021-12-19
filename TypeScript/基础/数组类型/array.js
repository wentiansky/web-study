// 1. 类型 + 方括号表示法；
// 2. 数组方法的参数也会限制指定的类型；
// 3. 数组泛型；
// 4. 用接口表示数组；
// 5. 类数组(Array-like Object)；
// 6. any在数组中的运用；
var arr1 = [1, 2, 3];
var arr2 = [1, 2, '3']; // 报错
arr1.push('3'); // 报错
var arr3 = [4, 5, 6];
var arr4 = [7, 8, 9];
// 定义类数组接口
function sum(a, b) {
    var args = arguments;
    return args[0] + args[1];
}
sum(1, 2);
// 常见的内置类数组接口：`IArguments`
// interface IArguments {
//   [index: number]: any
//   length: number
//   callee: Function
// }
function sum1(a, b) {
    var args = arguments;
    return args[0] + args[1];
}
sum1(1, 2);
// any
var arr5 = [1, '1', true];
