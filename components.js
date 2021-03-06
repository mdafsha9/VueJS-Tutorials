Vue.component('test-component', {
  data: function(){
    return{
      count :0
    }
  },
  template:'<div><h2>Registered Global component</h2><p>The components which are globally registered can be used in the template of any root Vue instance(new Vue) created after registration.Globally registered components uses Vue.component method.Global registration makes the component globally available in our application.This is the way of registering global component.</p><button v-on:click="count++">You clicked me {{count}} times</button></div>'
})
var vm = new Vue({
  el:'#Glcomp',
})


new Vue({
  el:'#LgComp',
  components:{
    'test-component':{
      template:'<div><h2>Registered Local component</h2><p>Due to Global registration, even if you do not use the component, it could still included in your final build. So it will create unnecessary javascript in your application. This can be avoided using Local registration.</p></div>'
    }
  }
})

Vue.component('re-component',{
    data:function(){
      this.msz = "Hello... We are reusing components here!";
      return this.msz;
    },
  template:'<div><h4>{{msz}}</h4></div>'
})
new Vue({
  el:'#reComp'
})

Vue.component('blog-post', {
  props:['title'],
  template:'<div>{{title}}</div>'
})
new Vue({
  el:'#pro'
})

Vue.component('blog-test', {
props:['title'],
template:"<p>{{title}}</p>"
});
new Vue({
  el:'#proTypes',
  data:{
    posts:[
      {id:1, title:'Vuejs1'},
      {id:2, title:'Vuejs2'},
      {id:3, title:'Vuejs3'}
    ]
  }
})
