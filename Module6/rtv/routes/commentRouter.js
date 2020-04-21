const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/Comment')
const jwt = require('jsonwebtoken')

// post comment
commentRouter.post('/', (req, res, next) => {

})

// get comments
commentRouter.get('/:id', (req, res, next) => {
    
})

module.exports = commentRouter