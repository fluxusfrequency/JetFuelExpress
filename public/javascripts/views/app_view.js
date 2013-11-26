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

  header: function() {
    this.headerView = this.headerView || new jetfuelexpress.HeaderView();
    return this.headerView;
  },

  showHeader: function() {
    var view = this.header();
    $('#header').html(view.render().el);
  },

  footer: function() {
    this.footerView = this.footerView || new jetfuelexpress.FooterView();
    return this.footerView;
  },

  showFooter: function() {
    var view = this.footer();
    $('#footer').html(view.render().el);
  },

  home: function() {
    this.homeView = this.homeView || new jetfuelexpress.HomeView();
    return this.homeView;
  },

  showHome: function() {
    var view = this.home();
    this.swapMain(view);
  },

  showLastUrl: function(item) {
    var view = new jetfuelexpress.LastUrlView();
    this.$main.html(view.render(item).el);
  },

  login: function() {
    this.loginView = this.loginView || new jetfuelexpress.LoginView();
    return this.loginView;
  },

  showLogin: function() {
    // if (this.mainView) {this.mainView = null;}
    var view = this.login();
    this.swapMain(view);
  },

  signup: function() {
    this.signupView = this.signupView || new jetfuelexpress.SignupView();
    return this.signupView;
  },

  showSignup: function() {
    if (this.mainView) {this.mainView = null;}
    var view = this.signup();
    this.swapMain(view);
  },

  urls: function() {
    this.urlsView = this.urlsView || new jetfuelexpress.UrlsView();
    return this.urlsView;
  },

  showUrls: function() {
    // if (this.mainView) {this.mainView = null;}
    $('#header-message').html('<h2>Paste Another Link to Shorten</h2>');
    var view = this.urls();
    this.swapMain(view);
  },

  showWelcome: function() {
    // if (this.urlsView) {this.urlsView = null;}
    var view = new jetfuelexpress.WelcomeView();
    $('#header-message').html(view.render().el);
  },

  swapMain: function(view) {
    this.$main.html(view.render().el);
  }

});
