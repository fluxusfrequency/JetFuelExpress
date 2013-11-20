var request = require('request');
var app = require('../app');

describe("url route", function() {
  it("should respond with 200 to url page request", function(done) {
    request("http://localhost:3000/urls", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with 200 to url/new page request", function(done) {
    request("http://localhost:3000/urls/new", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with redirect to url create page request", function(done) {
    request.post("http://localhost:3000/urls", function(error, response, body) {
      expect(response.statusCode).toBe(302);
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with redirect to url show page request", function(done) {
    request['url'] = "hello";
    request.get("http://localhost:3000/urls/hello", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with redirect to url edit page request", function(done) {
    request['url'] = "hello";
    request.get("http://localhost:3000/urls/hello/edit", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with redirect to url update page request", function(done) {
    request['body'] = {"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"};
    request.put("http://localhost:3000/urls/hello", function(error, response, body) {
      expect(response.statusCode).toBe(302);
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with redirect to url delete page request", function(done) {
    request['body'] = {"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"};
    request.del("http://localhost:3000/urls/hello", function(error, response, body) {
      console.log(request.body);
      expect(response.statusCode).toBe(302);
      expect(error).toBe(null);
      done();
    });
  });

});