var request = require('request');
var generator = require('../../lib/generator');
var app = require('../../server');
var Url = require('../../lib/url');


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
    var url = new Url({ "originalUrl":"www.google.com", 
                        "slug": generator.generate_slug(),
                        "active":true,
                        "visits": 1,
                        "userId": "0",
                        "createdDate": Date.now()});
    url.save();
    var url_2 = new Url({ "originalUrl":"www.geocities.com", 
                        "slug": generator.generate_slug(),
                        "active":true,
                        "visits": 1,
                        "userId": "0",
                        "createdDate": Date.now()});
    url_2.save();
    request("http://localhost:3000/api/urls", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContain('[{');
      expect(response.body).toContain('"slug":');
      expect(response.body).toContain('"originalUrl":');
      expect(response.body).toContain('"active":true');
      expect(response.body).toContain('"visits":1');
      expect(response.body).toContain('"userId":"0"');
      expect(response.body).toContain('"createdDate":');
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
        expect(response.body).toContain(',"slug"');
        expect(response.body).toContain(',"originalUrl":"www.google.com"');
        expect(response.body).toContain('"active":true');
        expect(response.body).toContain('"visits":1');
        expect(response.body).toContain('"userId":"0"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url GET json request", function(done) {
    var url = new Url({ "originalUrl":"www.google.com", 
                        "slug": generator.generate_slug(),
                        "active":true,
                        "visits": 1,
                        "userId": "0",
                        "createdDate": Date.now()});
    url.save();
    request.get( "http://localhost:3000/api/urls/", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"slug":"' + url.slug + '"');
        expect(response.body).toContain('"originalUrl":"www.google.com"');
        expect(response.body).toContain('"active":true');
        expect(response.body).toContain('"visits":1');
        expect(response.body).toContain('"userId":"0"');
        expect(response.body).toContain('"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });

  it("should REDIRECT to url GET slug json request", function(done) {
    var url = new Url({ "originalUrl":"www.lycos.com", 
                        "slug": generator.generate_slug(),
                        "active":true,
                        "visits": 1,
                        "userId": "0",
                        "createdDate": Date.now()});
    url.save();
    request.get( "http://localhost:3000/"  + url.slug, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain("Lycos is your source for all the Web has to offer");
        expect(error).toBeNull;
        done();
    });
  });

  it ("should respond with json to url UPDATE json request", function(done) {
    var url = new Url({ "originalUrl":"www.google.com", 
                        "slug": generator.generate_slug(),
                        "active":true,
                        "visits": 1,
                        "userId": "0",
                        "createdDate": Date.now()});
    url.save();
    request.put("http://localhost:3000/api/urls/" + url.slug, {form:{"originalUrl": "www.geocities.com"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"slug":"' + url.slug + '"');
        expect(response.body).toContain('"originalUrl":"www.geocities.com"');
        expect(response.body).toContain('"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url DELETE json request", function(done) {
    var url = new Url({ "originalUrl":"www.google.com", 
                        "slug": generator.generate_slug(),
                        "active":true,
                        "visits": 1,
                        "userId": "0",
                        "createdDate": Date.now()});
    url.save();
    request.del("http://localhost:3000/api/urls/" + url.slug, function(error, response, body) {
      expect(response.body).toContain("Success!")
      expect(error).toBeNull;
      done();
    });
  });

});