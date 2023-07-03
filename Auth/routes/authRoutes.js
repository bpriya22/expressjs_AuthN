//router instance

const express=require("express")
const { login, signup } = require("../controller/authController")
let authRouter=express.Router()  //router instance-. which can be used as middleware in server.js


//login
authRouter.get("/login",login)   //(path,variable)

//signup
authRouter.get("/signup",signup)

module.exports=authRouter   //exporting in order to 'require' as a middleware