const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));



app.use(express.static(__dirname+"/public"))
app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html")
});
let id="";
app.post("/",(req,res)=>
{
id=req.body.submit;
});


app.listen(3000,(req,res)=>
{
console.log("server is running at port 3000");
});