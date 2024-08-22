const mongoose = require('mongoose')
const uri = process.env.MONGODB_URI
const connectDB = async () => {
    try{
        await mongoose.connect(uri)
        console.log('MongoDB connected')
    }catch(error){
        console.log(error.message)
    }
}

module.exports = connectDB