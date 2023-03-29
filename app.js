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
  console.log(req.query);
  res.render('home')
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
