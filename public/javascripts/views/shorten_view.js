var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.ShortenView = Backbone.View.extend({
  templateName: 'shorten-template',

  render: function () {
    this.$el.html(_.template(jetfuelexpress.TEMPLATES[this.templateName])());
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
