// 1. 概念：泛型指在定义函数、接口和类的时候，不预先指定具体的类型，等到使用的时候再指定类型
// 2. 多个类型参数
// 1. 概念
function createArray1(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray1(3, 'x');
function createArray2(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
createArray2(3, 'y');
// 2. 多个类型参数
