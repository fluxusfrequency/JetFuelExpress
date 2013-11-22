var generator = require('../../lib/generator');
var Url = require('../../lib/url');

describe("UrlModel", function() {

  it("should exist", function() {
    url = new Url();
    expect(url.constructor.name).toBe('model');
  });

  describe("Url Attributes", function() {

    it("should have an originalUrl attribute", function() {
      var url = new Url({ 'originalUrl': 'www.google.com'});
      expect(url.originalUrl).toBe('www.google.com');
    });

    it("should have a slug attribute", function() {
      var slug = generator.generate_slug();
      var url = new Url({ 'slug': slug });
      expect(url.slug).toBe(slug);
    });

    it("should have an active attribute", function() {
      var url = new Url({ 'active': true });
      expect(url.active).toBe(true);
    });

    it("should have a visits attribute", function() {
      var url = new Url({ 'visits': 10 });
      expect(url.visits).toBe(10);
    });

    it("should have a userId attribute", function() {
      var url = new Url({ 'userId': "123n9" });
      expect(url.userId).toBe("123n9");
    });


  });

});