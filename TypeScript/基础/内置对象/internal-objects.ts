// 1. Boolean、Date、RegExp、Error等内置对象
const bool: Boolean = new Boolean(1)
const err: Error = new Error('error')
const date: Date = new Date()
const reg: RegExp = /[a-z]/

// 2. Document、HTMLElement、Event、NodeList等BOM、DOM内置对象
const body: HTMLElement = document.body
const allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {
  // do something
})

Math.pow(10, '2');