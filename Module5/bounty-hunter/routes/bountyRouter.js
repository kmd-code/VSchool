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

bountyRouter.get('/:bountyId', (req, res, next) => {
    Bounty.findById(
        req.params.bountyId,
        (err, bounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bounty)
        }
    )
})

bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

bountyRouter.delete('/:bountyId', (req, res, next) => {
    Bounty.findOneAndDelete(
        {_id: req.params.bountyId},
        (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted item: ${deletedItem.firstName} ${deletedItem.lastName}`)
    })
})

bountyRouter.put('/:bountyId', (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new: true},
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter