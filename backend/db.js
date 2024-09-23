const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/todo-sandeep"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("Todo", todoSchema);
module.exports = { todo: todo };
