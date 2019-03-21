const cookieParser = require('cookie-parser');
const session = require('express-session');
const parser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const { PORT: port = 8000 } = process.env;
const app = express();

// load mongoose config
require('./server/config/database');

app
  .use(express.static(path.join(__dirname, 'dist/public')))
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(logger('dev'))
  .use(cookieParser('lasfuhlaksajflksdhfglksufhlksdgfhlk'))
  .use(
    session({
      saveUninitialized: true,
      secret: 'sdlfjngsdlfgknd;sflkgn;sdlkfgn',
      resave: false,
      name: 'session',
      rolling: true,
      cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 3600000
      }
    })
  )
  .use(require('./server/routes'))
  .listen(port, () => console.log(`Express server listening on port ${port}`));
