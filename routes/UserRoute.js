const express = require('express');
const userModel = require('../models/User.js');
const app = express();

app.post('/user', async (req, res) => {
    try {
        const newUser = new userModel({
            ...req.body
        })
        await newUser.save();
        res.status(200).send(newUser);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app;

