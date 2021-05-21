const express=require("express");

const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/calculator.html");
});
app.post("/",function(req,res){
   var num1=Number(req.body.number1);
   var num2=Number(req.body.number2);
   var op=req.body.operator;
   var result=0;
   switch(op)
   {
       case '+':
           result=num1+num2;
       break;
       case '-':
           result=num1-num2;
       break;
       case '*':
           result=num1*num2;
       break;
       case '/':
           result=num1/num2;
       break;
       default:
           result=-1;
   }
   res.send("<center> <h1>Result</h1>  <p>"+num1+" "+op+" "+num2+" : "+result+"</p></center>");
});

app.listen(3000,function(){
    console.log("server running");
});