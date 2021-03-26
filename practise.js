var myDec = new Vue({
  el:'#app',
  data:{
    title:'Hello Vue!'
  },
  methods:{
    myOnce : function(){
      this.title = "Hello World!";
      return this.title;
    }
  }
})
