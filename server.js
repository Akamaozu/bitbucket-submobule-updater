var server = require('express')();

// load routes
  server.use('/', require('./routes') );

  server.get('/', function( req, res ){
    
    res.send( 'hello world' );
  });

server.listen( process.env.PORT );