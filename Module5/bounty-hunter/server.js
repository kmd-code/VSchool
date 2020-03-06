const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const port = 9434

//Middleware
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`mongodb://localhost:${port}/bounty-hunter`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to bounty-hunter database")
)

//Routes
app.use('/bounties', require('./routes/bountyRouter.js'))
app.use('/users', require('./routes/killRouter.js'))


app.listen(9000, () => console.log(`Server is running on ${port}`))