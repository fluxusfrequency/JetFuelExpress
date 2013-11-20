var jetfuelexpress = jetfuelexpress || {};

(function () {
  jetfuelexpress.UrlCollection = Backbone.Collection.extend({
    model: jetfuelexpress.UrlModel,

    initialize: function() {
      _.bindAll(this, 'urlCollection');
    },

    urlIndex: function() {
    }

  });
})();
