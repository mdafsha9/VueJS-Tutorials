var myDec = new Vue({
  el:'#app',
  data:{
    title:'Hello Vue!',
    msz:"<h1>WELCOME to one and all!<h1><p>Here we start VueJs project@</p>"
  },
  methods:{
    myOnce : function(){
      this.title = "Hello World!";
      return this.title;
    }
  }
})
