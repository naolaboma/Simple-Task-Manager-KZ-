# Simple Task Manager Backend

This repository contains the backend implementation for a simple task manager application. It is built using Node.js and Express.js.

## Features

- **GET /api/tasks**: Retrieve all tasks.
- **POST /api/tasks**: Add a new task.
- **PUT /api/tasks/:id**: Mark a task as completed.
- **DELETE /api/tasks/:id**: Delete a task.
- Simple HTML+CSS "API is running" page at `/`.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/naolaboma/Simple-Task-Manager-KZ-.git
   ```

2. Navigate to the project directory:

   ```sh
   cd Simple-Task-Manager-KZ-
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

## Usage

1. Start the server:

   ```sh
   npm start
   ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

### GET `/api/tasks`

Retrieve all tasks.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Sample Task",
    "completed": false
  }
]
```

### POST `/api/tasks`

Add a new task.

**Request Body:**
```json
{
  "title": "New Task"
}
```

**Response:**
```json
{
  "id": 2,
  "title": "New Task",
  "completed": false
}
```

### PUT `/api/tasks/:id`

Mark a task as completed.

**Response:**
```json
{
  "id": 2,
  "title": "New Task",
  "completed": true
}
```

### DELETE `/api/tasks/:id`

Delete a task.

**Response:** No content (status code `204`).

## Project Structure

```
Simple-Task-Manager-KZ-
├── index.js         # Main application file
├── package.json     # Project metadata and dependencies
```

## Dependencies

- [Express.js](https://expressjs.com/) - Web framework for Node.js

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Created by [Naolaboma](https://github.com/naolaboma).
