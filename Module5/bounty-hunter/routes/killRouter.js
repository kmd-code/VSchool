const express = require('express')
const userRouter = express.Router()
const User = require('../models/user.js')

userRouter.get('/', (req, res, next) => {
    User.find((err, users) => {
        if(err) {
            res.status(500)
            next(err)
        }
        res.status(200).send(users)
    })
})

userRouter.post('/', (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        if(err) {
            res.status(500)
            next(err)
        }
        res.status(201).send(savedUser)
    })
})

module.exports = userRouter