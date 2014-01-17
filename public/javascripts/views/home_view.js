var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.HomeView = Backbone.View.extend({
  templateName: 'home-template',

  render: function () {
    this.$el.html(_.template(jetfuelexpress.TEMPLATES[this.templateName])());
    return this;
  },

});
