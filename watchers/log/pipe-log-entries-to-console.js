module.exports = function( noticeboard ){
  
  noticeboard.watch( 'log-entry', 'pipe-to-console', function( msg ){

    var entry = msg.notice;

    console.log.apply( console, entry );
  });
}