const express = require('express')
const app = express()
const uuid = require('uuid/v4')

//Middleware
app.use(express.json())


//Fake Data
let bounties = [
    {
        firstName: "Boba",
        lastName: "Fett",
        living: true,
        bounty: 150000000,
        type: 'Sith',
        _id: uuid()
    }
]

//Routes
app.get('/bounties', (req, res) => {
    res.send(bounties)
})

app.post('/bounties', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.push(newBounty)
    res.send(bounties)
})

app.delete('/bounties/:bountyId', (req, res) => {
    let bountyId = req.params._id
    let bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(bounties)
})

app.put('/bounties/:bountyId', (req, res) => {
    let bountyId = req.params.bountyId
    let bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    let updatedBounties = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounties)
})

app.listen(9000, () => console.log("The server is running on port 9000"))