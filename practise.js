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

new Vue({
  el:'#myCon',
  data:{
    status:'pending'
  }
})

new Vue({
  el:'#myKey',
  data:{
    registered:true
  }
})

new Vue({
  el:'#myFor',
  data:{
    items:[
      {text:'HTML Tutorials'},
      {text:'Tailwind CSS'},
      {text:'JavaScript'},
      {text:'VueJS Tutorials'}
    ]
  }
})

new Vue({
  el:'#myOn',
  data:{
    message:'Hello Vuejs!',
  },
  methods:{
    reverseMessage:function(){
      this.message = this.message.split('').reverse('').join('');
    }
  }
})

new Vue({
  el:'#myModel',
  data:{
    msz:'Hello Vue!'
  }
})

new Vue({
  el:"#prac",
  data:{
    url:'http://www.google.com',
    con:'VueJs',
    pic:"images/download.png"
  }
})
