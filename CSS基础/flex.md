# flex

## flex语法
1. 单值语法：
    - 无单位数值：如flex: 1; 等价于flex-grow: 1; flex-shrink: 1; flex-basis: 0；
    - 一个有效的宽度值：如flex: 20px; 表示flex-basis: 20px；
    - 关键字none，auto或initial；
2. 双值语法：
    - 第一个必须为无单位数值，表示flex-grow；
    - 第二个可以为无单位数值，表示flex-shrink；
    - 第二个可以为有效的宽度值，表示flex-basis；
3. 三值语法：
    - 第一个值必须为无单位数，会被当作flex-grow；
    - 第二个值必须为无单位数，会被当作flex-shrink；
    - 第三个值必须为一个有效的宽度值，会被当作flex-basis；