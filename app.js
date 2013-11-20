
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var application_root = __dirname;
var path = require ( 'path' );
var mongoose = require ( 'mongoose' );



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



  // Development only
  if ('development' == app.get('env')) {
    // Show all errors in development
    app.use( express.errorHandler({ dumpExceptions: true, showStack: true}));
  }
});


// Start Server
app.listen(app.get('port'), function(){
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.settings.env );
});



// Routes

app.get('/', routes.index);
app.get('/urls', function(request, response) {
  response.send( 'Listing all the Urls' );
});



// Connect to database
mongoose.connect('mongodb://localhost/jetfuel_database');



// Schemas

var Url = new mongoose.Schema({
  shortenedUrl: String,
  originalUrl: String,
  description: String,
  createdDate: String
});



// Models

var UrlModel = mongoose.model( 'Url', Url);


// Get a list of all the urls - INDEX
app.get( '/urls', function( request, response ) {
  return UrlModel.find( function( err, urls ) {
    if ( !err ) {
      return response.send( urls );
    } else {
      return console.log( err );
    }
  });
});

// Insert a new url - CREATE
app.post( '/urls', function( request, response ) {
  var url = new UrlModel({
    shortenedUrl: request.body.shortenedUrl,
    originalUrl: request.body.originalUrl,
    description: request.body.description,
    createdDate: request.body.createdDate,
  });
  url.save( function( err ) {
    if ( !err ) {
      return console.log( 'created' );
    } else {
      return console.log( err );
    }
  });
  return response.send( url );
});

// Get a single url by id - GET
app.get( '/urls/:id', function( request, response ) {
  return UrlModel.findById( request.params.id, function( err, url ) {
    if( !err ) {
      return response.send( url );
    } else {
      return console.log( err );
    }
  });
});

// Update a url - UPDATE
app.put( '/urls/:id', function( request, response ) {
  console.log( 'Updating url ' + request.body.shortenedUrl );
  return UrlModel.findById( request.params.id, function( err, url ) {
    url.title = request.body.title;
    url.author = request.body.author;
    url.releaseDate = request.body.releaseDate;
    url.keywords = request.body.keywords;
    return url.save( function( err ) {
      if( !err ) {
        console.log( 'url updated' );
      } else {
        console.log( err );
      }
      return response.send( url );
    });
  });
});

// Delete a url - DELETE
app.delete( '/urls/:id', function( request, response ) {
  console.log( 'Deleting url with id: ' + request.params.id );
  return UrlModel.findById( request.params.id, function( err, url ) {
    return url.remove( function( err ) {
      if( !err ) {
        console.log( 'url removed' );
      } else {
        console.log( err );
      }
    });
  });
});
