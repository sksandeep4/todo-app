const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://sandy:greatnessiscoming9604@cluster0.nipxquz.mongodb.net/"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.Model("Todos", todoSchema);
module.exports = { todo: todo };
