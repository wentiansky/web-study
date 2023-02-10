define(['module1', 'jquery'], function (m1, $) {
  const name = 'jax'
  function showMsg() {
    console.log(m1.getMsg() + ', ' + name)
  }
  $('body').css('background', 'blue')
  return { showMsg }
})