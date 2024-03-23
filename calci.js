<!DOCTYPE html>
<html lang="en">
<style>
    *{
      padding:0;
      margin:0;
      font-family:'poppins',sans-serif;
     }
     body{
      background-color:#495250;
      display:grid;
      height:100vh;
      place-items:center;
     }
     .main{
      width:500px;
      height:450px;
      background-color:white;
      position:absolute;
      border:5px solid black;
      border-radius:6px;
     }
     .main input[type='text']{
      width:88%;
      position:relative;
      height:80px;
      top:5px;
      text-align:right;
      padding:3px 6px;
      outline:none;
      font-size:40px;
      border:5px solid black;
      display:flex;
      margin:auto;
      border-radius:6px;
      color:black;
     }
     .btn input[type='button']{
      width:90px;
      position:relative;
      height:60px;
      left:13px;
      top:20px;
      padding:2px;
      cursor:pointer;
      font-size:18px;
      border:5px solid black;
      transition:0.5s;
      margin:2px 0px;
      background-color:#495250;
      border-radius:6px;
      color:white;
     }
     .btn input[type='button']:hover{
      background-color:black;
      color:white;
     }
</style>
<script>
     function Solve(val){
       var v=document.getElementById('res');
       v.value+=val;
     }
     function Result(){
       var num1=document.getElementById('res').value;
       var num2=eval(num1);
       document.getElementById('res').value=num2;
     }
     function Clear(){
       var inp=document.getElementById('res');
       inp.value='';
     }
     function Back(){
       var ev=document.getElementById('res');
       ev.value=ev.value.slate(0.-1);
     }
     function SquareRoot(){
       var v=document.getElementById('res');
       v.value=Math.sqrt(eval(v.value));
     }
     function Power(){
       var v=document.getElementById('res');
       v.value=Math.pow(eval(v.value),2);
     }
     function Sine(){
       var v=document.getElementById('res');
       v.value=Math.sin(eval(v.value));
     }
     function Cosine(){
       var v=document.getElementById('res');
       v.value=Math.cos(v.value);
     }
     function Tangent(){
       var v=document.getElementById('res');
       v.value=Math.tan(eval(v.value));
     }
</script>
<title> Calculator </title>
</head>
<body>
  <div class="main">
    <input type="text" id="res">
    <div class="btn">
      <input type="button" value='C' onclick="Clear()">
      <input type="button" value='%' onclick="Solve('%')">
      <input type="button" value='<-' onclick="Back('<-')">
      <input type="button" value='/' onclick="Solve('/')">
      <input type="button" value='√' onclick="SquareRoot()">
      <br>
      <input type="button" value='7' onclick="Solve('7')">
      <input type="button" value='8' onclick="Solve('8')">
      <input type="button" value='9' onclick="Solve('9')">
      <input type="button" value='x' onclick="Solve('*')">
      <input type="button" value='x^2' onclick="Power()">
      <br>
      <input type="button" value='4' onclick="Solve('4')">
      <input type="button" value='5' onclick="Solve('5')">
      <input type="button" value='6' onclick="Solve('6')">
      <input type="button" value='-' onclick="Solve('-')">
      <input type="button" value='sin' onclick="Sine()">
      <br>
      <input type="button" value='1' onclick="Solve('1')">
      <input type="button" value='2' onclick="Solve('2')">
      <input type="button" value='3' onclick="Solve('3')">
      <input type="button" value='+' onclick="Solve('+')">
      <input type="button" value='cos' onclick="Cosine()">
      <br>
      <input type="button" value='00' onclick="Solve('00')">
      <input type="button" value='0' onclick="Solve('0')">
      <input type="button" value='.' onclick="Solve('.')">
      <input type="button" value='=' onclick="Result()">
      <input type="button" value='tan' onclick="Tangent()">
      <br>
    </div>
  </div>
  <script src='Calci.js'></script>
</body>
</html>
      
     






















































