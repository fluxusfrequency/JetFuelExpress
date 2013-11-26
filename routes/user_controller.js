User = require('../lib/user');

// CREATE

exports.create = function( request, response ) {
  var user = new User({
    username: request.body.username || 'New user',
    email: request.body.email || 'unknown email',
    password: request.body.password || '',
    createdDate: Date.now()
  });

  user.save( function( err, user ) {
    if( err ) response.json( err );
    response.send( user );
  });
};

// SHOW

exports.show = function( request, response ) {
  var found = User.findOne({ 'username': request.params.username }, function( err, user ) {
    if ( err ) {
      response.json( err );
    } else {
      return response.send( user );
    }
  });
};

// CURRENT
exports.current_user = function( request, response ) {
  var user = request.user;
  return response.send( user );
} 