var Browser = require('zombie');
var assert = require('assert');

browser = new Browser();

browser.on("error", function(error) {
  console.error(error);
});

browser.visit("http://localhost:3000/", function() {
  assert.equal(browser.text("title"), "JetFuelExpress");
  console.log("Successfully visited the homepage!");
});


browser.visit("http://localhost:3000/", function() {
  browser.fill("#url-form", "www.google.com").
  pressButton("Shorten", function() {
    assert.ok(browser.success);
    assert.equal(browser.location.pathname, "/shorten");
  });
});