
const express = require("express")
const app = express()
const mongoose = require("mongoose")

const appRoute = require("./controllerl/appRouter")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

mongoose.connect(process.env.Url)
    .then(() => {
        console.log("Connected")
    })
    .catch((err) => {
        console.log(err)
    })


app.use(cors());
app.use(express.json())
app.use('/uploads',express.static('uploads'))
app.use('/api/kd', appRoute)
app.listen(2000, () => {
    console.log("Listen")
})