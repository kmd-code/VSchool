const express = require('express')
const uuid = require('uuid/v4')

function pickedRouter(req, res, next){
    req.body._id = uuid()
    next()
}

module.exports = pickedRouter