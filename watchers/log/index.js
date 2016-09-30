var fs = require('fs');

module.exports = function( noticeboard ){
  
  var dir_content = fs.readdirSync( __dirname );

  dir_content.forEach( function( item ){

    // isn't self
      if( item === 'index.js' ) return;

    // has .js extension
      if( item.indexOf( '.js' ) != item.length - 3 ) return;

    // is a file
      var is_file = fs.lstatSync( __dirname + '/' + item ).isFile();

      if( !is_file ) return;

    require( './' + item )( noticeboard );
  });
}