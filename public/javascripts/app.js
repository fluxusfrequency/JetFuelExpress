var jetfuelexpress = jetfuelexpress || {};

$(function () {
  jetfuelexpress.appView = new jetfuelexpress.AppView();
  jetfuelexpress.router = new jetfuelexpress.Router();
  Backbone.history.start({pushState: true});
});