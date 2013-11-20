var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "shorten": "showUrl"
  },

  home: function() {
    jetfuelexpress.appView.showHome();
  },

  showUrl: function() {
    jetfuelexpress.appView.showUrl();
  }

});