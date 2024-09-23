const zod = require("zod");

const createToDo = zod.object({
  title: zod.string(),
  description: zod.string(),
});
const editToDo = zod.object({
  id: zod.string(),
});

module.exports = { createToDo: createToDo, editToDo: editToDo };
