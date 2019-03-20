const catchallRouter = require('./catch-all.route');
const apiRouter = require('express').Router();
const bookRouter = require('./book.routes');
const router = require('express').Router();

router.use('/books', bookRouter);

module.exports = apiRouter.use('/api', router).use(catchallRouter);
