// 1. 类型断言(Type Assertion)可以手动指定值的类型;
// 2. 语法;
//   2-1. 值 as 类型 (建议使用);
//   2-2. <类型> 值;
// 3. 用途；
//   3-1. 将联合类型断言为其中一个类型;
//   3-2. 将一个父类断言为一个具体的子类;
//   3-3. 将any断言为一个具体的类型;
// 4. 类型断言的限制;
// 5. 双重断言(一般不使用);
// 6. 类型断言 VS 类型转换
// 7. 类型断言 VS 类型声明；
// 8. 类型断言 VS 泛型；
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ***************************例子***************************
// 2-1. 语法1(建议)
var a = 1;
// 2-2. 语法2
var b = 1;
function getName(animal) {
    return animal.name;
}
var catName = getName({
    name: 'diandian',
    run: function () {
        console.log('run');
    }
});
var fishName = getName({
    name: 'jiyu',
    swim: function () {
        console.log('swim');
    }
});
// function isFish1(animal: Cat | Fish) {
//   // 直接判断会报错，因为Cat没有swim函数
//   if (typeof animal.swim === 'function') {
//     return true
//   }
//   return false
// }
// 尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误
function isFish2(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
// 3-2. 将一个父类断言为更加具体的子类
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function isApiError(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// 由于ApiError和HttpError是类，可以使用更合适的instanceof来判断
function isApiError1(error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
var apiErr = {
    code: 400,
    name: '',
    message: ''
};
// 将任何一个类型断言为any
window.foo = 1 // 报错
(window).foo = 2;
// 将any断言为一个具体的类型
function getCacheData(key) {
    return window.cache[key];
}
var dog = getCacheData('wangchai');
console.log(dog.name);
// Animal1兼容Cat1，可以互相类型断言
// 双重断言
function testCat1(cat) {
    return cat;
}
// ***************************例子***************************
