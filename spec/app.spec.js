var request = require('request');
var app = require('../server');

describe("app", function() {

  it("should respond with 200 to root request", function(done) {
    request("http://localhost:3000/", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond successfully with to an API request", function(done) {
    request("http://localhost:3000/api", function(error, response, body) {
      expect(response.statusCode).toBe(200);
      expect(response.body).toContain("JetFuelExpress API is running!")
      expect(error).toBe(null);
      done();
    });
  });

  it("should respond with 404 to random request", function(done) {
    request("http://localhost:3000/ABC123", function(error, response, body) {
      expect(response.statusCode).toBe(404);
      expect(error).toBe(null);
      done();
    });
  });


});