var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.FooterView = Backbone.View.extend({
  templateName: 'footer-template',

  render: function () {
    this.$el.html(_.template(jetfuelexpress.TEMPLATES[this.templateName])());
    return this;
  }
});
