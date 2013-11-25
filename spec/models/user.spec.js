var generator = require('../../lib/generator');
var User = require('../../lib/user');

describe("UserModel", function() {

  it("should exist", function() {
    user = new User();
    expect(user.constructor.name).toBe('model');
  });

  describe("User Attributes", function() {

    it("should be invalid without attrs", function() {
      var user = new User();
      expect(user.save).toThrow();
    });

    it("should have a username attribute", function() {
      var user = new User({ 'username': 'admin'});
      expect(user.username).toBe('admin');
    });

    it("should have an email attribute", function() {
      var user = new User({ 'username': 'admin', 'email': 'admin@example.com'});
      expect(user.email).toBe('admin@example.com');
    });

    it("should have a password attribute", function() {
      var user = new User({ 'username': 'admin', 'email': 'admin@example.com', 'password': 'password'});
      expect(user.password).toBe('password');
    });

    it("should have a createdDate attribute", function() {
      var user = new User({ 'username': 'admin', 'email': 'admin@example.com',
        'password': 'password', 'createdDate': Date.now()});
      expect(user.createdDate).not.toBe(undefined);
      expect(user.createdDate.constructor.name).toBe('Date');
    });

  });

});