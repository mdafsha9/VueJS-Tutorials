var myObj = new Vue({
  el:'#myApp',
  data:{
    message:"Hello World!",
    url:'assets/download.png',
    title:'you loaded this page on ' + new Date(),
    styleObjects:{
      backgroundColor:'black',
      color:'white',
      width:'200',
    }
  }
})
