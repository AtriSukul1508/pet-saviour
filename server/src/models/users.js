const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]

})

userSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 12);
            this.confirmpassword = await bcrypt.hash(this.confirmpassword, 12);
            // await this.save();
        }
        next();
    } catch (err) {
        console.log(`Error while hashing password - ${err}`);
    }
})

userSchema.methods.createAuthToken = async function (next) {
    try {
        const token = jwt.sign({ id: this._id, name: this.name, email: this.email }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(`Error while generating token - ${err}`);
    }
}

module.exports = mongoose.model('User', userSchema);