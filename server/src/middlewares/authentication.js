const jwt = require('jsonwebtoken')
const UserModel = require('../models/users');


const verifyAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ error: "Token authorization needed" })
    }
    const token = authorization.split(' ')[1];
    try {
        const { _id, name, email } = jwt.verify(token, process.env.SECRET_KEY)
        req.user = await UserModel.findById({ _id });
        next();

    } catch (err) {
        console.log(`Error while verifying token - ${err}`);
        res.status(401).json({ error: "Request is not authorized" });
    }
}


module.exports = verifyAuth;