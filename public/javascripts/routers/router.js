var jetfuelexpress = jetfuelexpress || {};

define([
  'jquery',
  'handlebars',
  'underscore',
  'backbone',
  'views/app_view',
  ], function($, Handlebars, _, Backbone, AppView){

  jetfuelexpress.Router = Backbone.Router.extend({

    routes: {
      "": "home",
      "shorten": "urls"
    },

    home: function() {
      jetfuelexpress.appView.showHome();
    },

    urls: function() {
      jetfuelexpress.appView.showUrls();
    }

  });
  return jetfuelexpress.Router;
});