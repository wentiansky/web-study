/**
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 字母和数字都属于字母数字字符。
 * 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
 * @param {string} s
 * @return {boolean}
 */

// 自己的做法
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let count = 0
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] === str[str.length - 1 - i]) {
      count++
    }
  }
  if (count === Math.floor(str.length / 2)) {
    return true
  }
  return false
};

// 双指针
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
    left = 0,
    right = str.length - 1
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}

// 栈
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let stack = [];

  let mid = Math.floor(str.length / 2) // str.length >> 1; 设置中间的位置，入栈至str[mid - 1]再遍历后续内容 并与栈中内容一一比对
  for (let i = 0; i < mid; i++) {
    stack.push(str[i]);
  }
  // 入栈完毕，接下来进行比对
  // 额外注意：如果字符串长度为奇数，应该跳过中间的字符进行比对
  if (str.length % 2) {
    mid++;
  }
  for (let i = mid; i < str.length; i++) {
    let pop = stack.pop();// 将元素一一出栈
    if (pop !== str[i]) {
      return false;
    }
  }
  return true;
}