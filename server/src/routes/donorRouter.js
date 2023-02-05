const DonorModel = require('../models/donor');
const donorRouter = require('express').Router();
const verifyAuth = require('../middlewares/authentication');

donorRouter.get('/donor', verifyAuth, async (req, res) => {
    try {
        const donors = await DonorModel.find({});
        res.status(200).json(donors);
    } catch (err) {
        console.log(`Error while fetching donors information -${err}`)
    }
})

