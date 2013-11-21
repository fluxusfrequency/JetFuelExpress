module.exports = function (app) {

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
};