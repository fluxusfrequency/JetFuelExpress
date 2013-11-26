var jetfuelexpress = jetfuelexpress || {};

$(function () {
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