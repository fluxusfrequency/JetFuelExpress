var request = require('request');
var generator = require('../lib/generator');
var app = require('../server');
// var UrlModel = mongoose.model( 'Urls', UrlSchema);



describe("api route", function() {

  it("should respond successfully with to an API request", function(done) {
    request("http://localhost:3000/api", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContain("JetFuelExpress API is running!")
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with json to url INDEX json request", function(done) {
    request("http://localhost:3000/api/urls", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContain('[{');
      expect(response.body).toContain('"shortenedUrl":');
      expect(response.body).toContain(',"originalUrl":');
      expect(response.body).toContain(',"createdDate":');
      expect(response.body).toContain('}]');
      var json = JSON.parse(response.body);
      var count = Object.keys(json).length;
      expect(count).toBeGreaterThan(1);
      done();
    });
  });

  it("should respond with json to url CREATE json request", function(done) {
    request.post("http://localhost:3000/api/urls", {form:{"originalUrl": "www.google.com"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain(',"shortenedUrl"');
        expect(response.body).toContain(',"originalUrl":"www.google.com"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url GET json request", function(done) {
    var doc = new app['UrlModel']({ "originalUrl":"www.google.com", 
                                    "shortenedUrl": generator.generate_slug()});
    doc.save();
    request.get( "http://localhost:3000/api/urls/", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"shortenedUrl":"' + doc.shortenedUrl + '"');
        expect(response.body).toContain(',"originalUrl":"www.google.com"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });

  it("should redirect to url GET shortenedUrl json request", function(done) {
    var doc = new app['UrlModel']({ "originalUrl":"www.lycos.com", 
                                    "shortenedUrl": generator.generate_slug(),
                                    "createdDate": Date.now()});
    doc.save();
    request.get( "http://localhost:3000/"  + doc.shortenedUrl, function(error, response, body) {
      console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain("Lycos is your source for all the Web has to offer");
        expect(error).toBeNull;
        done();
    });
  });

  it ("should respond with json to url UPDATE json request", function(done) {
    var doc = new app['UrlModel']({ "originalUrl":"www.altavista.com", 
                                    "shortenedUrl": generator.generate_slug(),
                                    "createdDate": Date.now()});
    doc.save();
    request.put("http://localhost:3000/api/urls/" + doc.shortenedUrl, {form:{"originalUrl": "www.geocities.com"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"shortenedUrl":"' + doc.shortenedUrl + '"');
        expect(response.body).toContain('"originalUrl":"www.geocities.com"');
        expect(response.body).toContain('"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url DELETE json request", function(done) {
    var doc = new app['UrlModel']({ "originalUrl":"www.angelfire.com", 
                                    "shortenedUrl": generator.generate_slug(),
                                    "createdDate": Date.now()});
    doc.save();
    request.del("http://localhost:3000/api/urls/" + doc.shortenedUrl, function(error, response, body) {
      expect(response.body).toContain("Success")
      expect(error).toBeNull;
      done();
    });
  });

});