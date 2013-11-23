var Browser = require('zombie');
var assert = require('assert');
// var promise = require('promise');

browser = new Browser();

browser.on("error", function(error) {
  console.error(error);
});


// Load up the home view

browser.visit("http://localhost:3000/", function() {
  assert.equal(browser.text("title"), "JetFuelExpress");
  console.log("Successfully visited the homepage!");
});


// Submit a link to shorten

browser.visit("http://localhost:3000/", function() {
  browser.fill("#originalUrl", "www.google.com").
  pressButton("Shorten", function() {
    assert.ok(browser.success);
    assert.equal(browser.location.pathname, "/shorten");
    assert.equal(browser.text("#url-template"), "Your Shortened Link");
    console.log("Redirected to /shorten");
  });
});