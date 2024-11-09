const express=require("express")
const MongoClient=require("mongoose");
const dotEnv=require("dotenv");
const bodyParser=require("body-parser")
const employeeroute=require('../routes/Employeeroute')
const app=express();

app.use(bodyParser.json());
dotEnv.config();
const PORT=process.env.PORT || 5555;

MongoClient.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Atlas Cloud connected successfully")
})
.catch((err)=>{
    console.log(err)
})

app.use("/employee",Employeeroute);
app.listen(PORT,()=>{
    console.log("My port is running on ${PORT} number")
})