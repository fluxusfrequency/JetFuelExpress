var jetfuelexpress = jetfuelexpress || {};
jetfuelexpress.TEMPLATES = jetfuelexpress.TEMPLATES || {};

$(function () {
  $('script[type="text/text-template"]').each(function() {
    var script = this;
    $.ajax({
      url: $(script).attr('src'),
      dataType: 'html',
      async: false,
      success: function(data) {
        jetfuelexpress.TEMPLATES[$(script).attr('id')] = data;
      }
    });
  });

  $.ajax({
    url: '/api/users/current_user',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      jetfuelexpress.current_user = data;
    }
  }).complete(function() {
    jetfuelexpress.appView = new jetfuelexpress.AppView();
    jetfuelexpress.router = new jetfuelexpress.Router();
    Backbone.history.start({pushState: true});
  });
});