// 联合类型取值可以表示多种类型中的一种
var code = '10';
code = 10;
code = true;
// 访问非公有属性或方法会报错
function getLength(something) {
    return something.length;
}
// 访问公有属性或方法
function getString(something) {
    return something.toString();
}
