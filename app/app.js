const express = require('express')

const app = express();
// loading routes
require('../config/routes')(app);

// handling requests out of bound




module.exports = app;