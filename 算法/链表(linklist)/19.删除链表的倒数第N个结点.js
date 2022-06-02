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

/**
 * 1. 自己的做法
 */
var removeNthFromEnd1 = function (head, n) {
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

/**
 * 2. 添加空结点再删除
 */
var removeNthFromEnd2 = function (head, n) {
  let dummy = {
    next: head
  } // 等价于 let dummy = new ListNode(null, head)
  let p = dummy
  let len = 0

  while (head) {
    len++
    head = head.next
  }
  for (let i = 1; i < len - n + 1; i++) {
    p = p.next
  }
  p.next = p.next.next
  return dummy.next
}

/**
 * 3. 栈的方法
 */
var removeNthFromEnd3 = function (head, n) {
  let dummy = new ListNode(null, head)
  let p = dummy
  let stack = []

  while (p) {
    stack.push(p)
    p = p.next
  }
  // 弹出倒数n个结点
  for (let i = 0; i < n; i++) {
    stack.pop()
  }
  // p指向倒数第n个结点的前一个结点
  p = stack[stack.length - 1]
  p.next = p.next.next
  return dummy.next
}

/**
 * 4. 空结点 + 快慢指针的方法
 */
var removeNthFromEnd4 = function (head, n) {
  
}