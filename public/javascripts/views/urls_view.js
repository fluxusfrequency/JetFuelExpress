var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlsView = Backbone.View.extend({
  el: '.url-list',

  initialize: function(initialUrls) {
    this.urlCollection = new jetfuelexpress.UrlCollection();
    this.urlCollection.fetch({reset: true});
    this.render();

    this.listenTo(this.urlCollection, 'add', this.renderUrl);
    this.listenTo(this.urlCollection, 'reset', this.render);
  },

  render: function() {
    this.urlCollection.each(function(item) {
      this.renderUrl(item);
    }, this);
  },

  renderUrl: function(item) {
    var urlView = new jetfuelexpress.UrlView({
      model: item
    });
    this.$el.append(urlView.render().el);
  },

});