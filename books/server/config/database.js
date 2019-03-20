const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/books', {
  useCreateIndex: true,
  useNewUrlParser: true
});

mongoose.connection.on('connected', () =>
  console.log('MongoDB connected to books')
);

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
