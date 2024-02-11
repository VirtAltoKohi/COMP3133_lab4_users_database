const mongoose = require('mongoose');

// Create Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username of minimum of 4 characters is required"],
        minlength: 4 // Using minlength instead of min
    },

    email: {
        type: String,
        validate: {
            validator: function(v) {
                return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v); // Improved email regex
            },
            message: props => `${props.value} is not a valid email`
        },
        required: [true, "User email is required"]
    },

    city: {
        type: String,
        validate: {
            validator: function(v) {
                return /^[A-Za-z\s]+$/.test(v); // Improved city regex
            },
            message: `City name must contain only letters and spaces`,
        },
        required: [true, 'User city is required']
    },

    website: {
        type: String,
        validate: {
            validator: function(v) {
                return /^(http|https):\/\//.test(v); // Improved website regex
            },
            message: 'Website must start with "http" or "https"',
        },
        required: [true, 'User website is required']
    },

    zipcode: {
        type: String,
        validate: {
            validator: function(v) {
                return /^\d{5}-\d{4}$/.test(v); // Corrected zipcode regex
            },
            message: props => `${props.value} is not a valid zipcode` 
        },
        required: [true, "User zipcode is required"]
    },

    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /^\d{1}-\d{3}-\d{3}-\d{3}$/.test(v); // Corrected phone regex
            },
            message: props => `${props.value} is not a valid phone number`
        },
        required: [true, "User phone number is required"]

    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;
