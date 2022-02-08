type EventNames = 'click' | 'scroll' | 'mousemove'

function handleEvent(ele: Element, event: EventNames) {
  // do something
}

handleEvent(document.getElementById('hello'), 'click') //正确
handleEvent(document.getElementById('world'), 'dbclick') // 报错