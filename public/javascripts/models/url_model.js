var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlModel = Backbone.Model.extend({

 parse: function(response) {
  response.id = response._id;
  return response;
 }
});