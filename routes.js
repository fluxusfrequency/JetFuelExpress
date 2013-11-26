var passport = require('passport');
var path = require('path');
var application_root = __dirname;

var urlContoller = require('./routes/url_controller');
var userController = require('./routes/user_controller');
var indexController = require('./routes/index_controller');
var authController = require('./routes/auth_controller');

var Url = require('./lib/url');
var User = require('./lib/user');

module.exports = function(app) {

  // Index Route

  app.get('/', indexController.index);

  // Alias Routes

  app.get('/shorten', function( request, response ) {
    return response.sendfile( path.join( application_root, 'public/index.html') ) ;
  });

  // Auth Routes

  app.post('/api/login', authController.login);
  app.get('/api/logout', authController.logout);

  // User Routes

  app.post( '/api/users/',            userController.create);
  app.get( '/api/users/current_user', userController.current_user);
  app.get( '/api/users/:username',    userController.show);

  // API Routes

  app.get( '/api',                    urlContoller.root);
  app.get( '/api/urls',               urlContoller.index);
  app.post( '/api/urls',              urlContoller.create);
  app.get( '/api/urls/:shortened',    urlContoller.show);
  app.put( '/api/urls/:shortened',    urlContoller.update);
  app.delete( '/api/urls/:shortened', urlContoller.delete);
  app.get( '/:shortened',             urlContoller.redirect);

};