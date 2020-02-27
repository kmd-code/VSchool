const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String,
        required: true
    },
    isAlive: {
        type: Boolean,
        required: true
    },
    bounty: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Bounty', bountySchema)