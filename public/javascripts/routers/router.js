var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "shorten": "urls"
  },

  home: function() {
    jetfuelexpress.appView.showHome();
    jetfuelexpress.appView.showWelcome();
  },

  urls: function() {
    jetfuelexpress.appView.showUrls();
  }

});