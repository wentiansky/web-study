/** 
 * 使用JavaScript模拟链表数据结构
 * 
 */

// Node类
function Node(element) {
  this.element = element // 当前结点点的元素
  this.next = null // 下一个结点的链接
}


// LinkedList类
function LList() {
  this.head = new Node('head') // 头结点
  this.find = find // 查找给定的结点
  this.insert = insert // 插入结点
  this.remove = remove // 删除结点
  this.print = print // 打印结点
}

/** 
 * @desc 查找给定的结点
 * @param { String } element 指定的元素
 */
function find(element) {
  var currNode = this.head
  while(currNode && (currNode.element != element)) {
    currNode = currNode.next
  }
  return currNode
}

/** 
 * @desc 在当前结点前插入新的结点
 * @param { String } newElement 新的元素
 * @param { String } element 指定的元素
 */
function insert(newElement, element) {
  var newNode = new Node(newElement)
  var currNode = this.find(element)
  newNode.next = currNode.next
  currNode.next = newNode
}

/** 
 * @desc 删除指定结点
 * @param { String } element // 指定结点
 */
function remove(element) {
  var removeNode = this.find(element)
  // console.log(removeNode.element)
  var prevNode = this.head
  if (!removeNode) return
  while(prevNode.next && (prevNode.next.element != removeNode.element)) {
    prevNode = prevNode.next
  }
  if (prevNode) {
    prevNode.next = prevNode.next.next
    removeNode = null
  }
}

/** 
 * @desc 打印结点
 */
function print() {
  var currNode = this.head
  while(currNode.next != null) {
    console.log(currNode.next)
    currNode = currNode.next
  }
}