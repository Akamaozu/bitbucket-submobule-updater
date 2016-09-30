var fs = require('fs');

module.exports = function( noticeboard ){
  
  var dir_content = fs.readdirSync( __dirname );

  dir_content.forEach( function( item ){

    // is a directory
      var is_dir = fs.lstatSync( __dirname + '/' + item ).isDirectory();

      if( !is_dir ) return;

    // has index file to configure loading
      try {

        var has_index = fs.lstatSync( __dirname + '/' + item + '/index.js' ).isFile();

        if( has_index ) require( './' + item )( noticeboard );
      }

      catch( e ){}

  });
}