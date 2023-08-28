const route = require("express").Router()
const { RegisterUser,LoginUser,AddImage,PubGetImage }=require("./middleware")

route.post("/register", (req, res) => {
    RegisterUser(req, res)

})
route.post("/login", (req, res) => {
    LoginUser(req, res)

})

route.get("/img", (req, res) => {
    GetImage(req, res)

})


route.get("/pubimg", (req, res) => {
   PubGetImage(req, res)

})

route.post("/postimg", (req, res) => {
    AddImage(req, res)

})

module.exports=route