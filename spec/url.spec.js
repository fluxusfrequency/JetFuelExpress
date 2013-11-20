var request = require('request');
var app = require('../server');

describe("url route", function() {
  it("should respond with 200 to url index page request", function(done) {
    request("http://localhost:3000/urls", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContain('Welcome');
      done();
    });
  });

  it("should respond with 200 to url/new page request", function(done) {
    request("http://localhost:3000/urls/new", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(body).toContain('Creating');
      expect(error).toBeNull;
      done();
    });
  });

  it("should respond with redirect to url create page request", function(done) {
    request.post("http://localhost:3000/urls", {form:{"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(302);
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with redirect to url show page request", function(done) {
    request['url'] = "hello";
    request.get("http://localhost:3000/urls/hello", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(body).toContain('Showing');
      expect(error).toBeNull;
      done();
    });
  });

  it("should respond with redirect to url edit page request", function(done) {
    request['url'] = "hello";
    request.get("http://localhost:3000/urls/hello/edit", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(body).toContain('Editing');
      expect(error).toBeNull;
      done();
    });
  });

  it("should respond with redirect to url update page request", function(done) {
    request.put("http://localhost:3000/urls/hello", {form:{"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "1384947747375" }},
      function(error, response, body) {
        expect(response.statusCode).toBe(302);
        expect(error).toBeNull;
        done();
    });
  });

  xit("should respond with redirect to url delete page request", function(done) {
    request['body'] = {"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"};
    request.del("http://localhost:3000/urls/hello", function(error, response, body) {
      expect(response.statusCode).toBe(302);
      expect(error).toBeNull;
      done();
    });
  });

});
