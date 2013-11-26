var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.AppView = Backbone.View.extend({
  
  initialize: function() {
    _.bindAll(this, 'render', 'showHeader');
    _.bindAll(this, 'render', 'showFooter');

    this.render();
  },

  render: function () {
    this.$main = $('#main');
    
    this.showHeader();
    this.showFooter();

    return this;
  },

  showHeader: function() {
    var view = new jetfuelexpress.HeaderView();
    $('#header').html(view.render().el);
  },

  showFooter: function() {
    var view = new jetfuelexpress.FooterView();
    $('#footer').html(view.render().el);
  },

  showHome: function() {
    var view = new jetfuelexpress.HomeView();
    this.swapMain(view);
  },

  showWelcome: function() {
    this.urlsView = null;
    var view = new jetfuelexpress.WelcomeView();
    $('#header-message').html(view.render().el);
  },

  showUrls: function() {
    $('#home-template').html('');
    $('#header-message').html('<h2>Paste Another Link to Shorten</h2>');
    var view = this.urls();
    this.swapMain(view);
  },

  swapMain: function(view) {
    this.$main.html(view.render().el);
  },

  urls: function() {
    this.urlsView = this.urlsView || new jetfuelexpress.UrlsView();
    return this.urlsView;
  }

});
