const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username of minimum of 4 characters is required"],
        min: 4
    },

    email: {
        type: String,
        validate: {
            validator: function(v) {
                return v.includes('@');
            },
            message: props => `${props.value} is not a valid email`
        },
        required: [true, "User email is required"]
    },

    city: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[A-Za-z\s]/.test(v);
            },
            message: `City name must contain only letters and spaces`,
        },
        required: [true, 'User city is required']
    },

    website: {
        type: String,
        validate: {
            validator: function(v) {
                return v.startsWith('http://') || v.startsWith('https://');
            },
            message: 'Website must start with "http" or "https"',
        },
        required: [true, 'User website is required']
    },

    zipcode: {
        type: String,
        validate: {
            validator: function(v) {
                return /d(5)-\d(4)/.test(v);
            },
            message: props => `${props.value} is not a valid zipcode` 
        },
        required: [true, "User zipcode is required"]
    },

    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /d(1)-\d(3)-\d(3)-\d(3)/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
        },
        required: [true, "User phone number is required"]

    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;