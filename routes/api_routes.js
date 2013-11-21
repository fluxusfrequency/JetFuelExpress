var mongoose = require ( 'mongoose' );

// Schema

var UrlSchema = new mongoose.Schema({
  title: String,
  shortenedUrl: String,
  originalUrl: String,
  description: String,
  createdDate: String
});

// Models

var UrlModel = mongoose.model( 'Urls', UrlSchema);

module.exports = function (app) {
  // API Routes

  // ROOT

  app.get('/api', function(request, response) {
    response.send( 'JetFuelExpress API is running!')
  });

  // INDEX

  app.get( '/api/urls', function( request, response ) {
    return UrlModel.find( function( err, url ) {
      if ( err ) {
        response.json( err );
      } else {
        response.send( url );
      }
    });
  });

  // CREATE

  app.post( '/api/urls', function( request, response ) {
    var url = new UrlModel({
      title: request.body.title,
      shortenedUrl: request.body.shortenedUrl,
      originalUrl: request.body.originalUrl,
      description: request.body.description,
      createdDate: Date.now(),
    });


    url.save( function( err, url ) {
      if( err ) response.json( err );
      response.send( url );
    });
  });

  // SHOW

  app.get( '/api/urls/:id', function( request, response ) {
    var found = UrlModel.findById( request.params.id, function( err, doc ) {
      if ( err ) {
        response.json( err );
      } else {
        return response.send( doc );
      }
      return found._id;
    });
  });

  // UPDATE

  app.put( '/api/urls/:id', function( request, response ) {
    return UrlModel.findById( request.params.id, function( err, doc ) {
      doc.title = request.body.title;
      doc.shortenedUrl = request.body.shortenedUrl;
      doc.originalUrl = request.body.originalUrl;
      doc.description = request.body.description;

      return doc.save( function( err, url ) {
        if( err ) response.json( err );
        response.send( url );
      });
    });
  });

  // DELETE

  app.delete( '/api/urls/:id', function( request, response ) {
    return UrlModel.findById( request.params.id, function( err, doc ) {

      return doc.remove( function( err, url ) {
        if( err ) response.json( err );
        response.send( "Success!" );
      });
    });
  });
};