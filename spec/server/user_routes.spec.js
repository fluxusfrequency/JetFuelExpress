var request = require('request');
var app = require('../../server');

describe("api route", function() {

  beforeEach(function() {
    User.remove({}, function(){});
  });

  it("should respond with json to user CREATE json request", function(done) {
    request.post("http://localhost:3000/api/users/", 
      {form:{"username": "johndoe", "email": "johndoe@example.com",
        "password": "password"}},
      function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"username":"johndoe"');
        expect(response.body).toContain('"email":"johndoe@example.com"');
        expect(response.body).toContain('"password":"password"');
        expect(response.body).toContain('"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });

  it("should respond with json to user GET json request", function(done) {
    var user = new User({"username": "janedoe", 
                         "email": "janedoe@example.com",
                         "password": "password",
                         "createdDate": Date.now()});

    user.save();
    var id = user._id.toString();
    request.get( "http://localhost:3000/api/users/" + id, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        expect(response.body).toContain('{');
        expect(response.body).toContain('"username":"janedoe"');
        expect(response.body).toContain('"email":"janedoe@example.com"');
        expect(response.body).toContain('"password":"password"');
        expect(response.body).toContain('"createdDate":');
        expect(response.body).toContain('}');
        expect(error).toBeNull;
        done();
    });
  });
});