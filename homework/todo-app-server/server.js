require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
app.use(bodyParser.json())

connectDB()

//? routes
app.use('/api/todos', require('./routes/api/todos'))

//? TO check if the app is running
app.get('/', (req, res) => {
    res.json({message: 'Welcome to Application'});
})


const port = 1234
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})