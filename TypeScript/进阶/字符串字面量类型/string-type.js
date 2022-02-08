function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'click'); //正确
handleEvent(document.getElementById('world'), 'dbclick'); // 报错
