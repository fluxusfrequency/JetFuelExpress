var jetfuelexpress = jetfuelexpress || {};

(function () {
  jetfuelexpress.Router = Backbone.Router.extend({

    routes: {
      "home": "home"
    },

    home: function() {
      jetfuelexpress.appView.showHome();
    }

  });
})();
