var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlCollection = Backbone.Collection.extend({
  model: jetfuelexpress.UrlModel,
  url: '/api/urls'

});
