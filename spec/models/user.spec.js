var generator = require('../../lib/generator');
var User = require('../../lib/user');

describe("UserModel", function() {

  it("should exist", function() {
    user = new User();
    expect(user.constructor.name).toBe('model');
  });

  describe("User Attributes", function() {

    it("should have a username attribute", function() {
      var user = new User({ 'username': 'admin'});
      expect(user.username).toBe('admin');
    });


  });

});