var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.HeaderView = Backbone.View.extend({
  template: Handlebars.compile($('#header-template').html()),

  events: {
    'click .brand': "showHome",
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
    var shortened_link = '1239fj';
    $.ajax({
      url: '/api/urls',
      type: 'POST',
      dataType: 'json',
      data: { "originalUrl": new_link, 
              "shortenedUrl": shortened_link },
      success: function(data) {
        Backbone.history.navigate('shorten', {trigger: true});
      },
      error: function(response) {
        var errors = response.responseJSON;
        if(errors) {
          $('#originalUrl').html(errors);
        }
      }
    });
  }

});