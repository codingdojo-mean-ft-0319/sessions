const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', function(request, response) {
  console.log(`catching route ${request.url}`);
  response.sendFile(path.join(__dirname, '../../dist/public/index.html'));
});
