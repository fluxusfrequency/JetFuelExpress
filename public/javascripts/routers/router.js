var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.Router = Backbone.Router.extend({

  routes: {
    "": "home"
  },

  home: function() {
    jetfuelexpress.appView.showHome();
  }

});