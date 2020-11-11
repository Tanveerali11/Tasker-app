const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));



app.use(express.static(__dirname+"/public"))
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html")
});

app.post("/login",(req,res)=>
{
    console.log("main page p agya ha");
    res.sendFile(__dirname+"/main.html")
});
app.post("/signup",(req,res)=>
{
  console.log("signup page pe ha gee");
  res.sendFile(__dirname+"/signup.html")
 
});
app.post("/signin", (req,res)=>
{
    res.sendFile(__dirname+"/main.html");
});


app.listen(3000,(req,res)=>
{
console.log("server is running at port 3000");
});