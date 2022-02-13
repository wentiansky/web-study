// 1. 普通枚举
// 2. 手动赋值
// 3. 常数枚举
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 8] = "Mon";
    Days[Days["Tue"] = 9] = "Tue";
    Days[Days["Wed"] = 10] = "Wed";
    Days[Days["Thu"] = 11] = "Thu";
    Days[Days["Fri"] = 12] = "Fri";
    Days[Days["Sat"] = 13] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 7); // true
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
