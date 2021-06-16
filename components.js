Vue.component('test-component', {
  data: function(){
    return{
      count :0
    }
  },
  template:'<div><h4>This is the way of registering global component.</h4><button v-on:click="count++">You clicked me {{count}} times</button></div>'
})
var vm = new Vue({
  el:'#comp',
})
