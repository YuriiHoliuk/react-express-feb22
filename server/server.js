const path = require('path');
const express = require('express');

const todos = [{ id: 1, text: 'Todo 1' }];

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.get('/todos', (_, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = { id: todos.length + 1, text: req.body.text };

  todos.push(todo);
  res.json(todo);
});

app.patch('/todos/:id', (req, res) => {
  const todo = todos.find((currentTodo) => (
    currentTodo.id === global.parseInt(req.params.id)
  ));

  if (!todo) {
    res.status(404).send('Not found');

    return;
  }

  todo.text = req.body.text;

  res.json(todo);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}. 🚀🚀🚀`);
});
