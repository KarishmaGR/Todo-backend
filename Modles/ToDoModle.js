const { default: mongoose } = require('mongoose')
const monggose = require('mongoose')

const TODOSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Todo', TODOSchema)