
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const userRoute = require("./controllerl/userRouter")
const cors = require("cors")
const dotenv = require("dotenv")



app.use(cors());
app.use(express.json())

app.use('/api/user', userRoute)
app.listen(2000, () => {
    console.log("Listen")
})