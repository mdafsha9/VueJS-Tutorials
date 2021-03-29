var myDec = new Vue({
  el:'#app',
  data:{
    message:'Hello Vue!',
    msz:"<h1>WELCOME to one and all!<h1><p>Here we start VueJs project@</p>",
    url:'https://www.google.com',
    pic:'images/download.png',
    title:'you loaded this page on ' + new Date(),
    pictitle:'images/google.jfif',
    titlepic:'Click here to jump Google',
    awesome:false
  },
  methods:{
    myOnce : function(){
      this.message = "Hello World!";
      return this.message;
    }
  }
})
new Vue({
  el:'#myTem',
  data:{
    isRegistered:true
  }
})
