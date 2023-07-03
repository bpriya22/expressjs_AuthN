//1] how to create a server in express       june/18

// const express=require('express')
//app instance top level function

// let app=express()

//stack of middleware

// function parse(req,res,next){   // has access to next
//     console.log("this is parse method");
//     next()
// }

// function auth(req,res,next){
//     console.log("this is authentication")
//     next()
// }

// app.use(auth)
// app.use(parse)

// app.get("/home",(req,res)=>{
//     res.send("hello Priya server created")
// })


// app.get("/home",parse,auth,(req,res)=>{
//     res.send("hello Priya server created")
// })

// another way-->using only one middleware
//route
// app.get("/home",(req,res,next)=>{
//     console.log("this is parse method")
//     next(),(req,res)=>{
//         console.log("this is end point")
//         res.send("hello world")
//     }
// })


// app.listen(5000,(err)=>{
//     if(err)console.log(err)
//     console.log("server running on port 5000")
// })

const express=require('express')
const mongoose=require("mongoose")
const taskRouter = require()