Vue.component('test-component', {
  template:'<div><h4>This is the way of registering a global component.</h4></div>'
})
var vm = new Vue({
  el:'#comp'
})
