const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 9000

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/rock-the-vote', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressJwt({ secret: process.env.SECRET }))
app.use('/api/issues', require('./routes/issuesRouter'))
// app.use('/api/issues/comments', require('./routes/commentRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
      res.status(err.status)
    }
    return res.send({errMsg: err.message})
  })

  if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
  }
  
  app.listen(PORT, () => {
    console.log(`Server is running on local port ${PORT}`)
  })