var jetfuelexpress = window.jetfuelexpress || {};

$(function () {
  new jetfuelexpress.Router();
  Backbone.history.start();
});