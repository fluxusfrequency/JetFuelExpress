describe("MongoDB", function() {
  it("should be running", function(done) {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/jetfuelexpress')
    var db = mongoose.connection;
    expect(db).not.toBe(null);
    done();
  });
});