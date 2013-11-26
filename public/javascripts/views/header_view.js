var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.HeaderView = Backbone.View.extend({
  template: Handlebars.compile($('#header-template').html()),

  events: {
    'click .brand': "showHome",
    'click #submit-button': 'addUrl',
    'click #login-link': 'login',
    'click #signup-link': 'signup',
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
        Backbone.history.navigate('shorten', {trigger: (Backbone.history.loc === 'shorten' ? false : true)});
        jetfuelexpress.urlCollection.add(data);
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