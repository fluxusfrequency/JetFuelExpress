var Browser = require('zombie');
var assert = require('assert');
var mocha = require('mocha');

browser = new Browser();

browser.on("error", function(error) {
  console.error(error);
});


// Load up the home view

browser.visit("http://localhost:3000/", function() {
  assert.equal(browser.text("title"), "JetFuelExpress");
  console.log("Successfully visited the homepage!");
});


describe("visit", function() {
  before(function(done) {
    this.browser = new Browser();
    this.browser
      .visit("/")
      .fill("#originalUrl", "www.google.com")
      .

      .then(done, done);
  });

  it("should load the promises page", function() {
    assert.equal(this.browser.location.pathname, "/promises");
  });
});

// Submit a link to shorten

browser.visit("http://localhost:3000/", function() {
  browser.fill("#originalUrl", "www.google.com").
  pressButton("Shorten", function() {
    assert.ok(browser.success);
    assert.equal(browser.location.pathname, "/shorten");
    assert.equal(browser.text("", ))
    console.log("Redirected to /shorten");
  });
});