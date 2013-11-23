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
    this.showView(view);
  },

  showWelcome: function() {
    var view = new jetfuelexpress.WelcomeView();
    $('#header-message').html(view.render().el);
  },

  showUrls: function() {
    this.$main.html('');
    $('#header-message').html('<h2>Paste Another Link to Shorten</h2>');
    var view = new jetfuelexpress.UrlsView();
    this.showView(view);
  },

  showView: function(view) {
    this.$main.html(view.render().el);
    // this.$main.html(view.render());
  }
});
