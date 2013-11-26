var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.HeaderView = Backbone.View.extend({
  template: _.template($('#header-template').html()),

  events: {
    'click .brand': "showHome",
    'click #feed-link': 'showFeed',
    'click #login-link': 'login',
    'click #signup-link': 'signup',
    'click #submit-button': 'addUrl',
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  showHome: function() {
    Backbone.history.navigate('', { trigger: true });
  },

  addUrl: function(e) {
    e.preventDefault();
    var formData = {};


    var new_link = this.$('#originalUrl').val();
    $.ajax({
      url: '/api/urls',
      type: 'POST',
      dataType: 'json',
      data: { "originalUrl": new_link },
      success: function(data) {
        if(jetfuelexpress.current_user) {
          Backbone.history.navigate('feed', {trigger: (Backbone.history.loc === 'feed' ? false : true)});
          jetfuelexpress.urlCollection.add(data);
        } else {
          Backbone.history.navigate('shorten', {trigger: false});
          jetfuelexpress.appView.showLastUrl(data);
        }
      },
      error: function(response) {

        var errors = response.responseJSON;
        if(errors) {
          $('#originalUrl').html(errors);
        }
      }
    });
    $('#originalUrl').val('');
  },

  login: function(e) {
    e.preventDefault();
    Backbone.history.navigate('login', {trigger:false});
    jetfuelexpress.appView.showLogin();
  },

  showFeed: function(e) {
    e.preventDefault();
    Backbone.history.navigate('feed', {trigger: true});
  },

  // logout: function(e) {
  //   e.preventDefault();

  //   $.ajax({
  //     url: '/logout',
  //     type: 'get',
  //     dataType: 'json',
  //     success: function(data) {
  //       Backbone.history.navigate('/', {trigger:true});
  //     },
  //     error: function(response) {}
  //   });
  // },

  signup: function(e) {
    e.preventDefault();
    Backbone.history.navigate('signup', {trigger:true});
    jetfuelexpress.appView.showSignup();
  }

});