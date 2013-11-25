var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlCollection = Backbone.Collection.extend({
  model: jetfuelexpress.UrlModel,
  url: '/api/urls',

  initialize: function() {
    this.sort();
  },

  comparator: function(url) {
    return [url.get('visits'), url.get('createdAt')];
    // a = a.get(this.sort_key);
    // b = b.get(this.sort_key);
    // return a > b ? -1
    //     :  a < b ?  1
    //     :           0;
  }


});
