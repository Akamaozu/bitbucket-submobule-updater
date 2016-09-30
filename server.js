var server = require('express')();

// load middlewares
  server.use( require('./middlewares/cjs-noticeboard')({ watchers: require('./watchers') }) );

// load routes
  server.use('/', require('./routes') );

  server.get('/', function( req, res ){
    
    res.send( 'hello world' );
  });

server.listen( process.env.PORT );