const mongoose = require('mongoose')

const Schema = mongoose.Schema

var eventModel = new Schema({
    city: {
        type: String
    },
    date: {
        type: Date
    },
    time: {
        type: String
    },
    address: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: {
            type: [Number],
        }
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'userSchema'
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    image: {
        type: String,
    },
    menu: [
        {
            title: {
                type: String,
            },
            description: {
                type: String,
            }
        }],
    reviews: [
        {
            userName: {
                type: String,
            },
            content: {
                type: String,
            }
        }],
})