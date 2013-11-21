var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlCollection = Backbone.Collection.extend({
  model: jetfuelexpress.UrlModel,
  url: '/api/urls',

  initialize: function() {
    this.sort_key = "createdDate";
    this.sort();
  },

  comparator: function(a, b) {
    a = a.get(this.sort_key);
    b = b.get(this.sort_key);
    return a > b ? -1
        :  a < b ?  1
        :           0;
  }


});
