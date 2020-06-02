const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/Comment')

// post comment
commentRouter.post('/:id', (req, res, next) => {
    req.body.user = req.user._id
    req.body.issue = req.params.id
    req.body.postingUser = req.user.username
    const newComment = new Comment(req.body)
    newComment.save((err, savedComment) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

// get comments
commentRouter.get('/:id', (req, res, next) => {
    Comment.find({ issue: req.params.id }, (err, comments) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

// // edit comment
// commentRouter.put('/:id', (req, res, next) => {
//     Comment.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true },
//         (err, updatedComment) => {
//             if(err){
//                 res.status(500)
//                 return next(err)
//             }
//             return res.status(200).send(updatedComment)
//         })
// })

// // delete comment
// commentRouter.delete('/:id', (req, res, next) => {
//     Comment.findOneAndDelete({ _id: req.params.id }, (err, deletedComment) => {
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(deletedComment)
//     })
// })

module.exports = commentRouter