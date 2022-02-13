// 1. 普通枚举
// 2. 手动赋值
// 3. 常数枚举
// 4. 外部枚举
enum Days { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Days["Sun"] === 7); // true

// 常数枚举
const enum Directions {
  Up,
  Down,
  Left,
  Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// 外部枚举
declare enum Directions1 {
  Up,
  Down,
  Left,
  Right
}