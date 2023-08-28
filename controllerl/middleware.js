
const { GenerateToken, Authentication } = require('./authentication')


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

            return res.status(404).json({"password":false})
        }

    }
    else {
        return res.status(404).json({"user":false})
    }

}

const GetImage = async (req, res) => {
    try {   
        const file = await Book.findById(req.params.fileId);
        console.log(file.imgname)
      
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ msg: error.message });
    }
}



module.exports = {
    RegisterUser, LoginUser,GetImage}