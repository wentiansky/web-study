/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let len = 0, p = head, i = 0

  // 先遍历获取链表的长度
  while (head !== null) {
    len++
    head = head.next
  }

  // 重新指向头结点
  head = p

  while (head !== null) {
    if (len === n) {
      // 删除头结点
      p = head.next
      break
    } else if (i === len - n - 1) {
      // 删除中间结点
      head.next = head.next.next
    } else {
      // 移到下一个结点
      head = head.next
    }
    i++
  }
  console.log('result: ', p)
  return p
};