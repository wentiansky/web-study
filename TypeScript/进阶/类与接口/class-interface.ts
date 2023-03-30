// 1. 类实现接口
// 2. 接口继承接口
// 3. 接口继承类

/* 1. 类实现接口 */
interface Alarm1 {
  alert(): void
}

class Door {

}

class SecurityDoor extends Door implements Alarm1 {
  alert() {
    console.log('SecurityDoor alert')
  }
}

class Car1 implements Alarm1 {
  alert() {
    console.log('Car1 alert')
  }
}

// 一个类可以实现多个接口
interface Light {
  lightOn(): void
}

class Car2 implements Alarm1, Light {
  alert() {
    console.log('Car2 alert')
  }
  lightOn() {
    console.log('Car2 light on')
  }
}

/* 2. 接口继承接口 */
interface Alarm2 {
  alert(): void
}

interface LighttableAlarm extends Alarm2 {
  lightOn(): void
}

/* 3. 接口继承类 */
class Point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

interface Point3d1 extends Point {
  z: number
}

let point3d1: Point3d1 = { x: 1, y: 2, z: 3 }

// 原因：Point既可以作为类，又可以作为类型
// 等价于(只包含Point的实例属性和实例方法)
interface PointInstanceType {
  x: number
  y: number
}

interface Point3d2 extends PointInstanceType {
  z: number
}

let point3d2: Point3d2 = { x: 4, y: 5, z: 6 }