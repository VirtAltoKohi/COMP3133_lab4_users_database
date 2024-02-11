const express = require('express');
const userModel = require('../models/User.js');
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

app.post('/user', async (req, res) => {
    try {
        // Create a new user instance with data from the request body
        const newUser = new userModel(req.body);
        
        // Save the new user to the database
        await newUser.save();

        // Respond with the newly created user
        res.status(201).json(newUser);
    } catch (err) {
        // If there's an error, handle it and send an error response
        console.error("Error creating user:", err);
        res.status(500).json({ error: "Could not create user", message: err.message });
    }
});

module.exports = app;
