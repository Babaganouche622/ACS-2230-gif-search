const express = require('express');
const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello Squirrel');
});

// Middleware

// Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
