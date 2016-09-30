var server = require('express')();

server.get('/', function( req, res ){
  
  res.send( 'hello world' );
});

server.listen( process.env.PORT );