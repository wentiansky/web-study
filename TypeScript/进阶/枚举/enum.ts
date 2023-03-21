// 1. 普通枚举
// 2. 手动赋值
// 3. 常数枚举
// 4. 外部枚举
// 枚举成员默认从0开始递增，也可以手动赋值
enum Days { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Days["Sun"] === 7); // true
console.log(Days[0] === 'Sun') // true

// 常数枚举const enum(不能包含计算成员)
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// 外部枚举 declare enum
declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}
let directions1 = [Directions1.Up, Directions1.Down, Directions1.Left, Directions1.Right];
console.log(directions1)