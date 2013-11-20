
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var mongoose = require ( 'mongoose' );
var user = require('./routes/user');
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



// Schemas

var UrlSchema = new mongoose.Schema({
  title: String,
  shortenedUrl: String,
  originalUrl: String,
  description: String,
  createdDate: String
});



// Models

var UrlModel = mongoose.model( 'Urls', UrlSchema);



// Routes

app.get('/', routes.index);


// INDEX
app.get( '/urls', function( request, response ) {
  UrlModel.find( function( err, docs ) {
    if ( err ) {
      response.json( err );
    } else {
      response.render( 'index', { urls: docs });
    }
  });
});

// NEW
app.get('/urls/new', function( request, response ) {
  response.render('new');
});

// CREATE
app.post( '/urls', function( request, response ) {
  var url = new UrlModel({
    title: request.body.title,
    shortenedUrl: request.body.shortenedUrl,
    originalUrl: request.body.originalUrl,
    description: request.body.description,
    createdDate: request.body.createdDate,
  });


  url.save( function( err, url ) {
    if( err ) response.json( err );
    response.redirect('/urls/' + url.title);
  });
});

app.param('title', function( request, response, next, title ) {
  UrlModel.find({title: title}, function( err, docs ) {
    request.url = docs[0];
    next();
  });
});

// SHOW
app.get( '/urls/:title', function( request, response ) {
  response.render('show', {url: request.url });
});

// EDIT
app.get( '/urls/:title/edit', function( request, response ) {
  response.render('edit', {url: request.url });
});

// UPDATE
app.put( '/urls/:title', function( request, response ) {
  UrlModel.update(
    { 'title': request.params.title },
    { 'shortenedUrl': request.params.shortenedUrl },
    { 'originalUrl': request.params.originalUrl },
      function( err ) {
      if( err ) response.json( err );
      response.redirect('/urls');
  });
});

// DELETE
app.delete( '/urls/:title', function( request, response ) {
  UrlModel.remove(
    { 'title': request.params.title},
      function( err ) {
      if( err ) response.json( err );
      response.redirect('/urls');
  });
});



// Start Server
app.listen(app.get('port'), function(){
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.settings.env );
});

module.exports = app;
