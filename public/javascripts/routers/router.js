var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "shorten": "urls",
    "login": "login",
    "signup": "signup"
  },

  home: function() {
    jetfuelexpress.appView.showHome();
    jetfuelexpress.appView.showWelcome();
  },

  urls: function() {
    jetfuelexpress.appView.showUrls();
  },

  login: function() {
    jetfuelexpress.appView.showLogin();
  },

  signup: function() {
    jetfuelexpress.appView.showSignup();
  }

});