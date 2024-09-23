const express = require("express");
const { createToDo, editToDo } = require("./types");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Todo App</h1>");
});

app.post("/todo", (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createToDo.safeParse(createPayLoad);
  if (!parsedPayLoad.success) {
    res.status(411).json({ msg: "Wrong Input Entered" });
    return;
  }
  res.send("<h1>Todo App</h1>");
});

app.get("/todos", (req, res) => {
  res.send("<h1>Todo App</h1>");
});

app.put("/completed", (req, res) => {
  res.send("<h1>Todo App</h1>");
});

app.listen(3000, () => {
  console.log("App listening on Port 3000");
});
