//all the instances are done here->(sserver.js isthe entry point to the project)

const express=require("express")
const mongoose=require("mongoose")
const authRouter = require("./routes/authRoutes")
let app=express()   //app instance

//register template engine
app.set("view engine","ejs")  //view engine is another name for template engine


//database connection
async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017/authDB")
    console.log("db connected")
}
db()
//http://localhost:5000/auth/login
//http://localhost:5000/auth/signup

//routes for app
app.use("/auth",authRouter)

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})