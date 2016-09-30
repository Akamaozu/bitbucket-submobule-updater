var receive_new_event_route = module.exports = require('express').Router();

receive_new_event_route.post('/', require('body-parser')() );

receive_new_event_route.post('/', function( req, res ){

  console.log( req.body );

  res.sendStatus( 200 );
});