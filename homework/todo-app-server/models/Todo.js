const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task:{
        type: String  
    },
    completed:{
        type: Boolean
    }
},{
    timestamps:true
});

module.exports = Todo = mongoose.model("Todo", TodoSchema )