const express = require('express')
const router = express.Router()
const { GetAllTodo, AddTodo, UpdateTodo, deleteTodo } = require('./Controllers/TodoControllers')

router.get('/', GetAllTodo)
router.post('/save', AddTodo)
router.put('/update', UpdateTodo)
router.delete('/delete', deleteTodo)




module.exports = router;