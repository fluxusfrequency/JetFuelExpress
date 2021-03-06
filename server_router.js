var passport = require('passport');
var path = require('path');
var application_root = __dirname;

var userController = require('./routes/user_controller');
var indexController = require('./routes/index_controller');
var urlContoller = require('./routes/url_controller');
var authController = require('./routes/auth_controller');

var Url = require('./lib/url');
var User = require('./lib/user');

module.exports = function(app) {

  // Index Route

  app.get('/', indexController.index);

  // Alias Routes

  app.get('/shorten', function(request, response){response.redirect('/#shorten');});
  app.get('/feed', function(request, response){response.redirect('/#feed');});

  // Auth Routes

  app.post('/login',  authController.login);
  app.get('/logout',  authController.logout);

  // User Routes

  app.post( '/api/users',             userController.create);
  app.get( '/api/users/current_user', userController.current_user);
  app.get( '/api/users/:username',    userController.show);

  // API Routes

  app.get( '/api',                    urlContoller.root);
  app.get( '/api/urls',               urlContoller.index);
  app.post( '/api/urls',              urlContoller.create);
  app.get( '/api/urls/:slug',         urlContoller.show);
  app.put( '/api/urls/:slug',         urlContoller.update);
  app.delete( '/api/urls/:slug',      urlContoller.delete);
  app.get( '/:slug',                  urlContoller.redirect);

};