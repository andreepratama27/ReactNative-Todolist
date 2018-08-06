const api = require("express").Router();
const todos = require("./todos");

/* Get all todos */
api.get("/todos", todos.getTodos);
api.get("/todos/:id", todos.getTodosById);
api.post("/todos", todos.postTodos);
api.delete(`/todos/:id`, todos.deleteTodos);

module.exports = api;
