const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
// const { PORT: port = 8000 } = process.env;
const app = express();

const names = ['Jason', 'Sam', 'Jenny'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
// app.set('views', path.resolve('views'))

app.use(parser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
  console.log(request);
  console.log('hello express');

  // response.send('<h1>Hello Express</h1>');
  response.render('index');
});

app.post('/names', function (request, response) {
  console.log(request.body);

  names.push(request.body.name);

  // response.render('content', { name: request.body.name, names: names });
  response.redirect('/');
});

app.get('/names/:index', function (request, response) {
  console.log(request.params);
  response.send(names[request.params.index]);
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));
// app.listen(port, function () { console.log(`Express server listening on port ${port}`) });

// const person = {
//   name: 'Bob',
//   pets: ['Spot', 'Bird']
// }