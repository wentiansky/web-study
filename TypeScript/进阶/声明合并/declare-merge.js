// 1. 概念：定义了两个相同的函数、接口或类，会合并为一个类型。
// 2. 函数的合并
// 3. 接口的合并
// 4. 类的合并
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
var str = reverse('abc');
