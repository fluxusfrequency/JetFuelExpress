var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlView = Backbone.View.extend({
  template: Handlebars.compile($('#url-template').html()),

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
