const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose.connect("mongodb://localhost:27017/Affilator",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
).then(()=>{
    console.log("connection successful");
}).catch(()=>{
    console.log("No connection");
})
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongooose = require("mongoose");


const userSchema = new mongooose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});
const User = new mongooose.model("USER", userSchema);
const port = process.env.PORT || 5000;
mongoose.set('strictQuery', true);
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.post('/login',(req,res,next)=>{
    const {email,password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(err){
            res.send(err);
        }
        if(user){
            if(user.password === password){
                res.json("login");
            }
            else{
                res.send("pass");
            }
        }
        else{
            res.send("ne");
        }
    });

}
);
app.post("/signup",(req,res)=>{
    const {name,email,password} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(err){
            console.log("Error")
            res.send(err)
            
        }
        if(user){
            res.json("exist");
        }
        else{
            const user = new User({
                name,
                email,
                password
                
            });
            user.save().then(()=>{
                res.json("created");
                
            }).catch((err)=>{
                console.log("Error2")
                res.send(err);
            });
       }
    });
});


app.listen(5000,()=>{
    console.log("Running on 5000");

})