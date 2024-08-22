const express = require('express')
const router = express.Router()
const Todo = require('../../models/Todo')

//? Create a todo
router.post('/', async (req, res) => {
    const todoObj = {
        task: req.body.task,
        completed: req.body.completed
    }
    const todo = new Todo(todoObj)
    await todo.save()
    res.status(201).json(todo)
})

//? Get all todos
router.get('/', async (req, res) => {
    try{
        const todos = await Todo.find({});
        res.json(todos);
    }catch{
        res.status(500).json({message: 'Something went wrong'})
    }
})

//? Get one todo
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById(id);
        if(todo){
            res.json(todo);
        }
        else {
            res.status(404).json({message: 'Todo not found'});
        }
    }catch{
        res.status(500).json({message: 'Something went wrong'});
    }
})

//? update a todo
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const todoBody = req.body;
        const updateTodo = await Todo.findByIdAndUpdate(id, todoBody, {
            new:true,
        });
        if(updateTodo){
            res.json(updateTodo);
        }
        else { 
            res.status(404).json({message: 'Todo not found'});
        }
    }catch{
        res.status(500).json({message: 'Something went wrong'});
    }
})

//? delete todo
router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const deleteTodo = await Todo.findByIdAndDelete(id);
        if( deleteTodo){
            res.json({message: 'Todo deleted'});
            
        }
        else {
            res.status(404).json({message: 'Todo not found'});
        }
    }catch(error){
        res.status(500).json({message: 'Something went wrong'});
    }
    
})
module.exports = router