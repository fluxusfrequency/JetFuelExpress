var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.LastUrlView = Backbone.View.extend({
  tagName: 'div',
  templateName: 'last-url-template',

  render: function (item) {
    this.$el.empty();
    this.$el.appent(_.template(jetfuelexpress.TEMPLATES[this.templateName])(item));
    return this;
  }

});