var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "shorten": "lastUrl",
    "feed": "urls",
    "login": "login",
    "signup": "signup"
  },

  home: function() {
    jetfuelexpress.appView.showHome();
    jetfuelexpress.appView.showWelcome();
  },

  lastUrl: function() {
    jetfuelexpress.appView.showLastUrl();
  },

  login: function() {
    jetfuelexpress.appView.showLogin();
  },

  signup: function() {
    jetfuelexpress.appView.showSignup();
  },

  urls: function() {
    jetfuelexpress.appView.showUrls();
  }

});