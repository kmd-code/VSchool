const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')



bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        } 
        return res.status(200).send(bounties)
    })
})

// bountyRouter.get('/:bountyId', (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     res.send(foundBounty)
// })

bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(201)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

// bountyRouter.delete('/:bountyId', (req, res) => {
//     let bountyId = req.params._id
//     let bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     bounties.splice(bountyIndex, 1)
//     res.send(bounties)
// })

// bountyRouter.put('/:bountyId', (req, res) => {
//     let bountyId = req.params.bountyId
//     let bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//     let updatedBounties = Object.assign(bounties[bountyIndex], req.body)
//     res.send(updatedBounties)
// })

module.exports = bountyRouter