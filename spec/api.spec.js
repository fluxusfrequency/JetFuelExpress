var request = require('request');
var app = require('../server');

describe("api route", function() {
  it("should respond with json to url INDEX json request", function(done) {
    request("http://localhost:3000/api/urls", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContain('[{');
      expect(response.body).toContain('{"title":');
      expect(response.body).toContain(',"shortenedUrl":');
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
    request.post("http://localhost:3000/api/urls", {form:{"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"title":"howdy"');
        expect(response.body).toContain(',"shortenedUrl":"bit.ly/23k49c"');
        expect(response.body).toContain(',"originalUrl":"www.google.com"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        var json = JSON.parse(response.body);
        var count = Object.keys(json).length;
        expect(count).toBe(6);
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url GET json request", function(done) {
    // var req_path = "";
    // var new_id = ""
    // request.post("http://localhost:3000/api/urls", {form:{"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"}}, 
    //   function(error, response, body) {
    //     new_id += JSON.parse(response.body)._id;
    //     req_path += "http://localhost:3000/api/" + new_id.toString(); 
    //   });
    //   console.log(new_id);
    request.get( "http://localhost:3000/api/urls/528ca0ceae9320aa67000001", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"title":"howdy"');
        expect(response.body).toContain(',"shortenedUrl":"bit.ly/23k49c"');
        expect(response.body).toContain(',"originalUrl":"www.google.com"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        var json = JSON.parse(response.body);
        var count = Object.keys(json).length;
        expect(count).toBe(6);
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url UPDATE json request", function(done) {
    
    request.put("http://localhost:3000/api/urls/528cc3566ece4af67a000001", {form:{"title": "howdy_doody", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"title":"howdy_doody"');
        expect(response.body).toContain(',"shortenedUrl":"bit.ly/23k49c"');
        expect(response.body).toContain(',"originalUrl":"www.google.com"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        var json = JSON.parse(response.body);
        var count = Object.keys(json).length;
        expect(count).toBe(6);
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url DELETE json request", function(done) {

    request.del("http://localhost:3000/api/urls/528cca3a005105e47f000002", {form:{"title": "howdy_doody", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"}},
      function(error, response, body) {
        expect(response.body).toContain("Success")
        expect(error).toBeNull;
        done();
    });
  });

});