// use js6hint
const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const mongoose = require ("mongoose");
const { stringify } = require('querystring');
mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser:true});
const signschema =new  mongoose.Schema({
    name: String,
    phone: Number,
    email:String,
    password:String

});
const User=mongoose.model("User",signschema);


app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html");
    
});

///// sending to the new user signup page ////////////////////
app.post("/signupPage",(req,res)=>
{
    res.sendFile(__dirname+"/signup.html");
    console.log("aagya signup page pe");
});




// first take email and password and then go to mainpage ///////////

app.post("/login",(req,res)=>
{
    const Email=req.body.signemail;
    const Pass = req.body.signpass;
    User.findOne({email: Email},(err,found)=>
    {
        
        if(err)
        { console.log("error");}
        else{
    
            if (found)
            {
                if(found.password==Pass)
                {
                console.log("main page p agya ha");
                res.sendFile(__dirname+"/main.html")}

            }
            else{ console.log("sign in ya password ghalat ha")}
        
    }});

 
});
// new user added in data base with validation and verifation /////////
app.post("/signin", (req,res)=>
{
    const name=req.body.name;
    const email= req.body.email;
    const phone = req.body.phone;
    const pass = req.body.password;
    User.exists({email:email},(err,check)=>
    {
        if(err)
        {
            console.log(err);
        }
        else{
            if(check)
            {
                console.log("use another email");
                console.log(check);
            }
            else{
                console.log(check);
                
const user= new User({
    name: name,
    phone: phone,
    email:email,
    password:pass
});
user.save();
console.log("agya main page ")
res.sendFile(__dirname+"/main.html");
                
            }
        }
    });
});

app.listen(3000,(req,res)=>
{
console.log("server is running at port 3000");
});


