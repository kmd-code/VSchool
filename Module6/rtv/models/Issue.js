const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    upVotes: {
        type: Number,
        default: 0
    },
    downVotes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comments: [
        {
            comment: {
                type: String,
                required: true
            },
            timeStamp: {
                type: Date,
                default: Date.now
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            postingUser: {
                type: String,
                required: true
            }
    }
    ],
})

module.exports = mongoose.model("Issue", issueSchema)