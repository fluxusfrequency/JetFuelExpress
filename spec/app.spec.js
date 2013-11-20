var request = require('request');

describe("app", function() {

  it("should respond with 200 to root request", function(done) {
    request("http://localhost:3000/", function(error, response, body) {
      expect(200);
      done();
    });
  });

  it("should respond with 404 to random request", function(done) {
    request("http://localhost:3000/ABC123", function(error, response, body) {
      expect(404);
      done();
    });
  });


});