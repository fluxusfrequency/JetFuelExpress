
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require ( 'mongoose' );
var http = require('http');
var path = require('path');

var application_root = __dirname;

var generator = require('./lib/generator');
var Url = require('./lib/url');



// Create server
var app = express();



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
  mongoose.connect('mongodb://localhost/jetfuelexpress_test');
}



//Routes


//ROOT

app.get('/api', function(request, response) {
  response.send( 'JetFuelExpress API is running!')
});

// INDEX

app.get( '/api/urls', function( request, response ) {
  return Url.find( function( err, url ) {
    if ( err ) {
      response.json( err );
    } else {
      response.send( url );
    }
  });
});

// CREATE

app.post( '/api/urls', function( request, response ) {
  var url = new Url({
    slug: generator.generate_slug(),
    originalUrl: request.body.originalUrl,
    active: request.body.active || true,
    visits: request.body.visits + 1 || 1,
    userId: request.body.userId || "0",
    createdDate: Date.now()
  });

  url.save( function( err, url ) {
    if( err ) response.json( err );
    response.send( url );
  });
});

// SHOW

app.get( '/api/urls/:shortened', function( request, response ) {
  var found = Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {
    if ( err ) {
      response.json( err );
    } else {
      return response.send( url );
    }
  });
});

// REDIRECT

app.get( '/:shortened', function( request, response ) {
  var found = Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {
    if ( err ) {
      response.json( err );
    } else {
      return response.redirect("http://" + url.originalUrl);
    }
  });
});

// UPDATE

app.put( '/api/urls/:shortened', function( request, response ) {
  return Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {
    url.slug = url.slug;
    url.originalUrl = request.body.originalUrl;
    url.active = request.body.active || true,
    url.visits = request.body.visits + 1 || 1,
    url.userId = request.body.userId || "0",
    url.createdDate = url.createdDate || Date.now();

    return url.save( function( err, url ) {
      if( err ) response.json( err );
      response.send( url );
    });
  });
});

// DELETE

app.delete( '/api/urls/:shortened', function( request, response ) {
  return Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {

    return url.remove( function( err, url ) {
      if( err ) response.json( err );
      response.send( "Success!" );
    });
  });
});



// Start Server
app.listen(app.get('port'), function(){
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.settings.env );
});

module.exports = app;
