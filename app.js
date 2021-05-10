const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost/CRUDAPP', {useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false })
    .then(()=> console.log('Connected to database'))
    .catch((err) => console.log('Connection Failed'))

const users = require('./routes/users')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/app/data', users)


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`App is running on port ${PORT}`))