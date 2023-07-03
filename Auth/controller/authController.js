//data logics

//login and signup variable are declared in authRoutes -> which has its logic here.
const login=(req,res)=>{
    res.send("login")
}

const signup=(req,res)=>{
    res.send("signup")
}

module.exports={
    login,signup
}