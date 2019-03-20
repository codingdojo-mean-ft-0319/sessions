const express = require('express');
const parser = require('body-parser');
const path = require('path');

const { PORT: port = 8000 } = process.env;
const app = express();

// load mongoose config
require('./server/config/database');

app
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(require('./server/routes'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));
