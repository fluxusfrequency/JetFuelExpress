var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.WelcomeView = Backbone.View.extend({
  templateName: 'welcome-template',

  render: function () {
    this.$el.html(_.template(jetfuelexpress.TEMPLATES[this.templateName])());
    return this;
  }

});
