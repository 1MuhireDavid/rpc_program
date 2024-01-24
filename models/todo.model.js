const mongoose = require('mongoose');
// Define Todo Schema
const todoSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

// Create Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
