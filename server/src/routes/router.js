const router = require('express').Router();
const UserModel = require('../models/users');
const bcrypt = require('bcryptjs');

router.get('/', (req, res) => {
    res.send("Hello");
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log(`Login data in backend - ${req.body}`);
        if (!email || !password) {
            return res.status(422).json({ error: "Please fill out all the required login fields" })
        }
        const validUser = await UserModel.findOne({ email: email });
        if (!validUser) {
            return res.status(400).json({ error: "Invalid login credintials" });
        }
        else {
            const isPasswordMatch = await bcrypt.compare(password, validUser.password);
            if (isPasswordMatch) {
                const token = validUser.createAuthToken();
                console.log(`Token generated while signing in - ${token}`);
                res.cookie("jwebtoken", token, {
                    expires: new Date(Date.now() + 50000000),
                    httpOnly: true
                })
                console.log("Login successful");
                return res.status(200).json({ message: "Logged in successfully" });
            }
            else {
                return res.status(401).json({ error: "Invalid login details" });
            }
        }
    } catch (err) {
        console.log(`Error while logging in -${err}`);
    }
})


router.post('/register', async (req, res) => {
    const { name, email, phone, password, confirmpassword } = req.body;
    try {
        console.log(`Registered data in backend - ${req.body}`);
        if (!name || !email || !phone || !password || !confirmpassword) {
            return res.status(422).json({ error: "Please fill up all the details" });
        }
        const isEmailExist = await UserModel.findOne({ email: email })
        if (isEmailExist) {
            return res.status(400).json({ error: "User already exists" });//400 for client fault
        }
        else {
            if (password === confirmpassword) {
                const newUser = new UserModel({ name, email, phone, password, confirmpassword })
                const response = await newUser.save();
                console.log(response);
                return res.status(201).json({ message: "User registered successfully" }); // 201 for successful creation
            }
            else {
                return res.status(401).json({ error: "Password does not match" });//401 for error authentication
            }
        }
    } catch (err) {
        console.log(`Error while registering - ${err}`);
    }
})



module.exports = router;