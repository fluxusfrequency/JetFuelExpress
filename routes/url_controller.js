Url = require('../lib/url');
generator = require('../lib/generator');


//ROOT

exports.root = function(request, response) {
  response.send( 'JetFuelExpress API is running!');
};

// INDEX

exports.index = function( request, response ) {
  if (request.user) {
    return Url.find({ userId: request.user._id }, function( err, urls ) {
      if ( err ) {
        response.json( err );
      } else {
        response.send( urls );
      }
    });
  } else {
    return Url.find( function( err, urls) {
      if ( err ) {
        response.json( err );
      } else {
        response.send( urls );
      }
    });
  }
};

// CREATE

exports.create = function( request, response ) {
  var url = new Url({
    slug: generator.generate_slug(),
    originalUrl: request.body.originalUrl,
    active: request.body.active || true,
    visits: request.body.visits + 1 || 1,
    userId: (request.user ? request.user._id : "0"),
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
  return Url.findOne({ 'slug': request.params.shortened }, function( err, url ) {
    if ( !url ) {
      response.redirect( '/' );
    } else {
      url.visits += 1;
      url.save(function( err, url ) {
        if( err ) response.json( err );
      });

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
    url.visits = request.body.visits || 1,
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