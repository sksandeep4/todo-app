const express = require("express");
const { createToDo, editToDo } = require("./types");
const { todo } = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Todo App</h1>");
});

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createToDo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({ msg: "Wrong Input Entered" });
    return;
  }
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });
  res.json({ msg: "Todo was created" });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({ todos: todos });
});

app.put("/completed", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createToDo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({ msg: "Wrong Input Entered" });
    return;
  }
  await todo.update({ _id: req.body.id }, { completed: true });

  res.json({ msg: "Todo was updated" });
});

app.listen(3000, () => {
  console.log("App listening on Port 3000");
});
