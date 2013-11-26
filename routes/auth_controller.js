var passport = require('passport');

exports.login = function(request, response) { 
  passport.authenticate('local', {  successRedirect: '/',
                                    failureRedirect: '/login',
                                    failureFlash: false });
};

exports.logout = function(request, response) {
  request.logout();
  response.redirect('/');
};