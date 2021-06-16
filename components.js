Vue.component('test-component', {
  data: function(){
    return{
      count :0
    }
  },
  template:'<div><h4>The components which are globally registered can be used in the template of any root Vue instance(new Vue) created after registration.We have registered the components globally using Vue.component method.Global registration makes the component globally available in our application.This is the way of registering global component.</h4><button v-on:click="count++">You clicked me {{count}} times</button></div>'
})
var vm = new Vue({
  el:'#comp',
})
