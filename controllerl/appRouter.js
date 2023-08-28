const route = require("express").Router()
const { RegisterUser,LoginUser }=require("./middleware")

route.post("/register", (req, res) => {
    RegisterUser(req, res)

})
route.post("/login", (req, res) => {
    LoginUser(req, res)

})

route.get("/img", (req, res) => {
    GetImage(req, res)

})

module.exports=route