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
        expect(response.body).toContain(',"shortenedUrl"');
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
    // var new_id = "";
    // var req = request.post("http://localhost:3000/api/urls", {form:{"title": "howdy", "shortenedUrl": "bit.ly/23k49c", "originalUrl": "www.google.com", "createdDate": "2rdkwe"}}, 
    //   function(error, response, body) {
    //     // var new_id = JSON.parse(response.body)._id;
    //     req_path += "http://localhost:3000/api/" + new_id.toString(); 
    //     new_id += JSON.parse(response.body)._id.toString();
    //   });
    request.get( "http://localhost:3000/api/urls/WDtZVm", function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"shortenedUrl":"WDtZVm"');
        expect(response.body).toContain(',"originalUrl":"www.geocities.com"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        var json = JSON.parse(response.body);
        var count = Object.keys(json).length;
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to url UPDATE json request", function(done) {
    
    request.put("http://localhost:3000/api/urls/WDtZVm", {form:{"title": "howdy_doody", "shortenedUrl": "WDtZVm", "originalUrl": "www.geocities.com"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"title":"howdy_doody"');
        expect(response.body).toContain('"shortenedUrl":"WDtZVm"');
        expect(response.body).toContain(',"originalUrl":"www.geocities.com"');
        expect(response.body).toContain(',"createdDate":');
        expect(response.body).toContain('}');
        var json = JSON.parse(response.body);
        var count = Object.keys(json).length;
        expect(error).toBeNull;
        done();
    });
  });

  xit("should respond with json to url DELETE json request", function(done) {

    request.del("http://localhost:3000/api/urls/WDtZVm", function(error, response, body) {
      expect(response.body).toContain("Success")
      expect(error).toBeNull;
      done();
    });
  });

});