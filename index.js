const pd = 'cE2PxZOAhR5tAuwj'

const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/UserRoute.js');

const app = express();

mongoose.connect('mongodb+srv://admin:Nq8JSfeaco4f0mrX@comp3133.bhrgzig.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log(`MongoDB connected ${success}`);
}).catch(err => {
    console.log(`Error while connecting to MongoDB ${err}`);
});

app.use(userRoute);

app.listen(3000, () => { console.log(`Server is running`)});
