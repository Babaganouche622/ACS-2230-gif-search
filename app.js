// Require Libraries
const express = require('express');
const fetch = require('node-fetch');

// App Setup
const app = express();

// Middleware
// Allow Express (our web framework) to render HTML templates and send them back to the client using a new function
const { engine } = require('express-handlebars');

// Import .env variables
require('dotenv').config();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));
// Routes
app.get('/', (req, res) => {
  // Handle the home page when we haven't queried yet
  let term = ""
  if (req.query.term) {
    term = req.query.term
  }
  fetch(`https://g.tenor.com/v1/search?q=${term}&key=${process.env.API_KEY}&limit=10`)
    .then(response => response.json())
    .then(
      (data) => {
        const gifs = data.results;
        res.render('home', { gifs });
      }
    );
})

// Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
