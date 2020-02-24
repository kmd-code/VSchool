const express = require('express')
const app = express()
const uuid = require("uuid/v4")


const users = [
    {name: "Kaydon", age: 27, _id: uuid()},
    {name: "Dane", age: 25, _id: uuid()},
    {name: "Brandon", age: 34, _id: uuid()},
    {name: "Zach", age: 27, _id: uuid()},
    {name: "Saya", age: 26, _id: uuid()}, 
    {name: "Ivan", age: 32, _id: uuid()}
]

app.get("/users", (req, res) => {
    res.send(users)
})



app.listen(9000, () => console.log("The Server is running on Port 9000"))