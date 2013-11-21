var jetfuelexpress = jetfuelexpress || {};

define([
  'jquery',
  'handlebars',
  'underscore',
  'backbone',
  'collections/url_collection',
  'views/urls_view',
  'views/url_view',
  'views/header_view',
  'views/footer_view',
  'views/shorten_view',
  ], function($, Handlebars, _, Backbone, UrlsView, UrlView, HeaderView, FooterView, ShortenView){

  jetfuelexpress.AppView = Backbone.View.extend({
    
    initialize: function() {
      _.bindAll(this, 'render', 'showHeader');
      _.bindAll(this, 'render', 'showFooter');
      _.bindAll(this, 'render', 'showShorten');

      this.render();
    },

    render: function () {
      this.$main = $('#main');
      
      this.showHeader();
      this.showFooter();
      this.showShorten();

      return this;
    },

    showHeader: function() {
      var view = new HeaderView();
      $('#header').html(view.render().el);
    },

    showFooter: function() {
      var view = new FooterView();
      $('#footer').html(view.render().el);
    },

    showShorten: function() {
      var view = new ShortenView();
      $('#shorten').html(view.render().el);
    },

    showHome: function() {
      var view = new HomeView();
      this.showView(view);
    },

    showUrls: function() {
      this.$main.html('');
      var view = new UrlsView();
      this.showView(view);
    },

    showView: function(view) {
      this.$main.html(view.render().el);
    }
  });
  return jetfuelexpress.AppView;
});
