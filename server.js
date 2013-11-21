
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require ( 'mongoose' );
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var application_root = __dirname;

// Create server
var app = express();







// Routes Namespace

var api_routes = require('./routes/api_routes')(app);
var view_routes = require('./routes/view_routes')(app);


// Configure server
app.configure( function() {

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.set('title', 'JetFuelExpress')

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.cookieParser('Once upon a midnight dream'));
  app.use(express.session());
  app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));

  // Parse request body and populate request.body
  app.use( express.bodyParser() );

  // Check request.body for HTTP method overrides
  app.use( express.methodOverride() );

  // Perform route lookup based on URL and HTTP method
  app.use(app.router);

  // Where to serve static content
  app.use( express.static( path.join( application_root, 'public') ) );

  app.use( "/", ( path.join( application_root, 'public') ) );
});



// Development only
if ('development' == app.get('env')) {
  // Show all errors in development
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
  mongoose.connect('mongodb://localhost/jetfuelexpress');
}

// Test only
if ('test' == app.get('env')) {
  // Show all errors in development
  app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
  mongoose.connect('mongodb://localhost/jetfuelexpress');
}

// Start Server
app.listen(app.get('port'), function(){
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.settings.env );
});

module.exports = app;
