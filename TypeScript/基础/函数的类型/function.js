// 1. 函数声明
// 2. 函数表达式
// 3. 用接口定义函数的形状
// 4. 可选参数
// 5. 参数默认值
// 6. 剩余参数
// 7. 重载
//函数声明
function sum(x, y) {
    return x + y;
}
sum(1, 2);
// 函数表达式
// TS中`=>`表示函数定义，与ES6中的箭头函数不同
var mySum = function (x, y) {
    return x + y;
};
mySum(1, 2);
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('tom', 'cat');
var tom = buildName('tom');
// 默认值
function buildNameDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = 'cat'; }
    return firstName + ' ' + lastName;
}
var tomcat1 = buildName('tom', 'cat');
var tom1 = buildName('tom');
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
push([], 1, 2, 3);
// 重载
// 可以利用联合类型，缺点：输出类型不明确
function reverse(x) {
    if (typeof x === 'number') {
        return String(x).split('').reverse().join('');
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
function reverse1(x) {
    if (typeof x === 'number') {
        return String(x).split('').reverse().join('');
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
