const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    postingUser: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
})

module.exports = mongoose.model("Comment", commentSchema)