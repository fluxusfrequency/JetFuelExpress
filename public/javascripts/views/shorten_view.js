var jetfuelexpress = jetfuelexpress || {};

define([
  'jquery',
  'handlebars',
  'underscore',
  'backbone',
  'text!templates/shorten.hbs'
  ], function($, Handlebars, _, Backbone, shortenTemplate){

  jetfuelexpress.ShortenView = Backbone.View.extend({
    template: Handlebars.compile(shortenTemplate),

    render: function () {
      this.$el.html(this.template());
      return this;
    },

    events: {
      'click #submit-button': 'addUrl',
    },

    addUrl: function(e) {
      e.preventDefault();
      var formData = {};

      var new_link = this.$('#originalUrl').val();
      $.ajax({
        url: '/api/urls',
        type: 'POST',
        dataType: 'json',
        data: { url: { originalUrl: new_link } },
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
  return jetfuelexpress.ShortenView;
});