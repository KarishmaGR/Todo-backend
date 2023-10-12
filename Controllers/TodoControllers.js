const TODO = require("../Modles/ToDoModle")



module.exports.GetAllTodo = async (req, res) => {
    try {
        let todos = await TODO.find();  // find() method is used to get all the data from a collection in MongoDB.
        res.send(todos)


    } catch (error) {
        res.status(500).json({ message: error.toString() })

    }
}



module.exports.AddTodo = async (req, res) => {
    try {
        const { text } = req.body;
        const newtodo = await TODO.create({ text })
        res.status(200).json({
            success: true,
            message: "Todo Addedd Successfully",
            newtodo
        })

    } catch (error) {
        res.status(500).json({ message: error.toString() })

    }
}

module.exports.UpdateTodo = async (req, res) => {
    try {
        const { id, text } = req.body;

        const UpdateTodo = await TODO.findByIdAndUpdate(id, { text: text }, { new: true })
        if (!UpdateTodo) {
            return res.status(404).json({
                message: "Todo not found"
            })
        }

        res.status(200).json({
            message: "Todo Updated Successfully",
            data: UpdateTodo
        })

    } catch (error) {
        res.status(500).json({ message: error.toString() })
    }
}


module.exports.deleteTodo = async (req, res) => {
    try {
        const { _id } = req.body
        const todo = await TODO.findByIdAndDelete({ _id });
        if (!todo) {
            return res.status(404).json({
                message: "Todo not Found"
            })
        }
        res.status(200).json({
            message: "todo deleted Successfully"
        })

    } catch (error) {
        res.status(500).json({ message: error.toString() })

    }
}