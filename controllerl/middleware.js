
const { GenerateToken, Authentication } = require('./authentication')
const Image = require("../model/image.js")
const User = require('../model/user.js')
const { v4: uuidv4 } = require("uuid");
const RegisterUser = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
    })


    try {
        const findUser = await User.findOne({ "username": req.body.username })
        if (!findUser) {
            const saveUser = await newUser.save()
            return res.status(200).json("Successfully Registered!")

        }
        else {
            return res.status(404).json("User already exist")
        }

    }
    catch (err) {
        return res.status(404).json(err)

    }


}
const LoginUser = async (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const findUser = await User.findOne({ "username": username })

    if (findUser) {
        if (findUser.password == password) {
            GenerateToken(findUser, res)

        }
        else {

            return res.status(404).json({ "password": false })
        }

    }
    else {
        return res.status(404).json({ "user": false })
    }

}


//private
const GetImage = async (req, res) => {
    Authentication(req, res, async () => {
        try {
            const file = await Book.findById(req.params.fileId);
            console.log(file.imgname)

        } catch (error) {
            console.error(error.message);
            res.status(404).json({ msg: error.message });
        }


    })

}

//public

const PubGetImage = async (req, res) => {
  
        try {
            const file = await Book.findById(req.params.fileId);
            console.log(file.imgname)

        } catch (error) {
            console.error(error.message);
            res.status(404).json({ msg: error.message });
        }


  

}

const AddImage = async (req, res) => {
    Authentication(req, res, async () => {
        const img = new Image({
            isbn: req.body.isbn,
            image: req.files["image"][0].path,
            imgname: req.files["image"][0].originalname
        });

        try {
            const saveimage = await img.save()
            return res.status(200).json(saveimage)
        }
        catch (err) {
            return res.status(500).json(err)
        }


    })
}




module.exports = {
    RegisterUser, LoginUser, GetImage, AddImage,PubGetImage
}