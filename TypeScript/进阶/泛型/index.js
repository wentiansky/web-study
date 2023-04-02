// 2. 多个类型参数
// 3. 泛型约束
// 4. 泛型接口
// 5. 泛型类
/* 2. 多个类型参数 */
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }));
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
var createArray1;
var createArray2;
createArray1 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
createArray2 = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(createArray1(3, 'x'));
console.log(createArray2(3, 'y'));
/* 5. 泛型类 */
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
