const express = require('express')
const issuesRouter = express.Router()
const Issue = require('../models/Issue')


issuesRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issuesRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

issuesRouter.post('/:id/comment', (req, res, next) => {
    req.body.user = req.user._id
    req.body.postingUser = req.user.username
    Issue.findByIdAndUpdate(
        req.params.id,
        {$push: {"comments": req.body}},
        {new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedIssue.comments[updatedIssue.comments.length - 1])
        }
    )
})

issuesRouter.put('/:postId/comment/:commentId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.postId, "comments._id": req.params.commentId},
        {$set: {"comments.$.comment": req.body.comment}},
        {new: true},
        (err, updatedIssueComment) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssueComment)
        }
    )
})

issuesRouter.delete('/:postId/comment/:commentId', (req,res,next) => {
    req.body.user = req.user._id
    Issue.findOneAndUpdate(
        { _id: req.params.postId, "comments._id": req.params.commentId },
        {$pull: { comments: {user: req.user._id, _id: req.params.commentId}}},
        {new: true},
        (err, deletedIssueComment) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(deletedIssueComment)
        }
    )
})

issuesRouter.delete('/:issueId', (req, res, next) => {
    Issue.findOneAndDelete({ _id: req.params.id }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedItem)
    })
})

issuesRouter.put('/:issueId', (req, res, next) => {
    Issue.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true }, 
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
    })
})

module.exports = issuesRouter