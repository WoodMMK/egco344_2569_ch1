const express = require('express');
const app = express();
const port = 3000;

// Mock static JSON data for students
const students = [
  { id: 1, name: 'Alice Johnson', gpa: 3.8 },
  { id: 2, name: 'Bob Smith', gpa: 3.2 },
  { id: 3, name: 'Charlie Brown', gpa: 3.9 },
  { id: 4, name: 'Diana Prince', gpa: 4.0 },
  { id: 5, name: 'Eve Adams', gpa: 3.5 }
];

// Route to return all students' GPAs
app.get('/students', (req, res) => {
  res.json(students);
});

// Route to query a specific student by ID
app.get('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});