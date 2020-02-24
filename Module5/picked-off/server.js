const express = require('express')
const app = express()
const uuid = require('uuid/v4')

let pickedObj = [
    {
        name: "Richie Rich",
        age: 27,
    }
]

app.use(express.json())

app.use('/', require('./middleware.js'))

app.get('/', (req, res) => {
    res.send(pickedObj)
})

app.listen(9000, () => console.log("the server is operating on port 9000"))