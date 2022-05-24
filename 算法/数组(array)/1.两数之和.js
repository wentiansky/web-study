/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 自己的做法
// 时间复杂度：O(N^2)
// 空间复杂度：O(1)
// var twoSum = function(nums, target) {
//   let num1, num2
//   for (let i = 0; i < nums.length; i++) {
//     num1 = nums[i]
//     num2 = target - num1
//     const index = nums.findIndex(item => item === num2)
//     if (num1 + nums[index] === target && i !== index) {
//       return [i, index]
//     }
//   }
//   return []
// };


// 知识点：哈希表
// 时间复杂度：O(N)，对于每一个元素num1，我们可以O(1)地寻找num2
// 空间复杂度：O(N)，其中N是数组中的元素数量，主要为哈希表的开销
var twoSum = function (nums, target) {
  let map = {}, num1, num2
  for (let i = 0; i < nums.length; i++) {
    num1 = nums[i]
    num2 = target - num1
    if (num2 in map) {
      return [i, map[num2]]
    }
    map[num1] = i
  }
  return []
};