var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.FooterView = Backbone.View.extend({
  template: _.template($('#footer-template').html()),

  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
