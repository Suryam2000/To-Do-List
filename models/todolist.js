const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const ToDoList = mongoose.model('ToDoList', listSchema);

module.exports = ToDoList;