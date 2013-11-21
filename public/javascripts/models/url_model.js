var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlModel = Backbone.Model.extend({
 defaults: {
  title: 'New Link',
  shortenedUrl: 'http://jetfuelx/29jc20',
  originalUrl: 'www.google.com',
  description: "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for."
 },

 parse: function(response) {
  response.id = response._id;
  return response;
 }
});
