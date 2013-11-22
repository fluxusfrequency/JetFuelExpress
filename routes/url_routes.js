Url = require('../lib/url');
generator = require('../lib/generator')


//ROOT

exports.root = function(request, response) {
  response.send( 'JetFuelExpress API is running!')
};

// INDEX

exports.index = function( request, response ) {
  return Url.find( function( err, url ) {
    if ( err ) {
      response.json( err );
    } else {
      response.send( url );
    }
  });
};

// CREATE

exports.create = function( request, response ) {
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
};

// SHOW

exports.show = function( request, response ) {
  var found = Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {
    if ( err ) {
      response.json( err );
    } else {
      return response.send( url );
    }
  });
};

// REDIRECT

exports.redirect = function( request, response ) {
  var found = Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {
    if ( err ) {
      response.json( err );
    } else {
      return response.redirect("http://" + url.originalUrl);
    }
  });
};

// UPDATE

exports.update = function( request, response ) {
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
};

// DELETE

exports.delete = function( request, response ) {
  return Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {

    return url.remove( function( err, url ) {
      if( err ) response.json( err );
      response.send( "Success!" );
    });
  });
};