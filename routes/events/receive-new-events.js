var receive_new_event_route = module.exports = require('express').Router();

// parse http form post
  receive_new_event_route.post('/', require('body-parser')() );

// POST /
// parse submodule repo event 
  receive_new_event_route.post('/', function( req, res ){

    // determine event type

      // pull request
        if( req.body.push ){

          var update = req.body.push;

          console.log( 'submodule repo updated!\n\n', update );
        }

      // unknown
        else console.log( 'unknown submodule repo event\n\n', req.body );

    res.sendStatus( 200 );
  });