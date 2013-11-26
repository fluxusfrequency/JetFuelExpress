var passport = require('passport');

exports.login = passport.authenticate('local', { successRedirect: '/#feed',
                                                 failureRedirect: '/login'
});

exports.logout = function(request, response) {
  request.logout();
  response.redirect('/');
};