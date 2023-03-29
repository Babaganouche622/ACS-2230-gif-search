const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

// Middleware
// Allow Express (our web framework) to render HTML templates and send them back to the client using a new function
const hbs = handlebars.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
      foo() { return 'FOO!'; },
      bar() { return 'BAR!'; }
  }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

// Routes
app.get('/', (req, res) => {
  const gifUrl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245';
  res.render('hello-gif', {gifUrl});
});

app.get('/greetings/:name', (req, res) => {
  // grab the name from the path provided
  const name = req.params.name;
  // render the greetings view, passing along the name
  res.render('greetings', { name });
});


// Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
