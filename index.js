const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

const tasksFile = 'tasks.json';

// Helper function to read tasks from the JSON file
const readTasks = () => {
  if (!fs.existsSync(tasksFile)) {
    fs.writeFileSync(tasksFile, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(tasksFile));
};

// Helper function to write tasks to the JSON file
const writeTasks = (tasks) => {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
};

// GET /api/tasks - Return all tasks
app.get('/api/tasks', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// POST /api/tasks - Add a new task
app.post('/api/tasks', (req, res) => {
  const tasks = readTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title: req.body.title,
    completed: false,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Mark a task as completed
app.put('/api/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  task.completed = true;
  writeTasks(tasks);
  res.json(task);
});

// DELETE /api/tasks/:id - Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  res.status(204).send();
});

// Simple HTML+CSS "API is running" page
app.get('/', (req, res) => {
  res.send('<h1>Task Manager API is running</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});