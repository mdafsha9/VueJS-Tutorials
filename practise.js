var myDec = new Vue({
  el:'#app',
  data:{
    message:'Hello Vue!',
    msz:"<h1>WELCOME to one and all!<h1><p>Here we start VueJs project@</p>",
    url:'https://www.google.com',
    pic:'assets/download.png',
    title:'you loaded this page on ' + new Date()
  },
  methods:{
    myOnce : function(){
      this.message = "Hello World!";
      return this.message;
    }
  }
})
