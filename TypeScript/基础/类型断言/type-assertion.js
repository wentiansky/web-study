// 1. 类型断言(Type Assertion)可以手动指定值的类型；
// 2. 语法；
// 3. 用途；
// ***************************例子***************************
// 2-1. 语法1（建议）
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
function isFish2(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
// ***************************例子***************************
