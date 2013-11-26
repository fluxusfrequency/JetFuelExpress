var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlsView = Backbone.View.extend({
  className: 'url-list',

  initialize: function(initialUrls) {
    jetfuelexpress.urlCollection = new jetfuelexpress.UrlCollection();
    jetfuelexpress.urlCollection.fetch({ reset: true });

    this.listenTo(jetfuelexpress.urlCollection, 'add', this.renderUrl);
    this.listenTo(jetfuelexpress.urlCollection, 'reset', this.render);
  },

  render: function() {
    this.$el.empty();
    jetfuelexpress.urlCollection.each(function(item) {
      this.renderUrl(item);
    }, this);
    return this;
  },

  renderUrl: function(item) {
    var urlView = new jetfuelexpress.UrlView({
      model: item
    });
    this.$el.prepend(urlView.render().el);
  }

});