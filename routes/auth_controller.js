var passport = require('passport');

exports.login = passport.authenticate('local', { successRedirect: '/',
                                                 failureRedirect: '/login'
});

exports.logout = function(request, response) {
  request.logout();
  response.redirect('/');
};