// Dependencies

var express = require('express');
var mongoose = require ('mongoose');
var passport = require ('passport'),
  LocalStrategy = require('passport-local').Strategy;
var http = require('http');
var path = require('path');

var application_root = __dirname;



// Create server
var app = express();



// Configure server
app.configure( function() {

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hjs');
  app.set('title', 'JetFuelExpress')

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.cookieParser('Once upon a midnight dream'));
  app.use(express.session({ secret: "shh its a secret"}));
  app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));

  // Passport settings
  app.use(passport.initialize());
  app.use(passport.session());

  // Parse request body and populate request.body
  app.use( express.bodyParser() );

  // Check request.body for HTTP method overrides
  app.use( express.methodOverride() );

  // app.use( "/", ( path.join( application_root, 'public') ) );

  // Perform route lookup based on URL and HTTP method
  app.use(app.router);

  // Where to serve static content
  app.use( express.static( path.join( application_root, 'public') ) );


});

// Development only
if ('development' == app.get('env')) {
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
  mongoose.connect('mongodb://localhost/jetfuelexpress');
}

// Test only
if ('test' == app.get('env')) {
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
  mongoose.connect('mongodb://localhost/jetfuelexpress_test');
}

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username}, function(err, user) {
      if(err) { return done(err); }
      if(!user) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      if(!user.password === password) {
        return done(null, false, { message: 'Incorrect username or password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Routes

var routes = require('./server_router')(app);


// Start Server
app.listen(app.get('port'), function(){
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.settings.env );
});

module.exports = app;
