var routes = module.exports = require('express').Router();

routes.use( '/event', require('./events') );