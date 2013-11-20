var request = require('request');
var app = require('../app');

describe("MongoDB", function() {
  it("should be running", function(done) {
    var mongoose = require('mongoose');
    var db = mongoose.connection;
    expect(db).not.toBe(null);
    done();
  });
});