var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.SignupView = Backbone.View.extend({
  templateName: 'signup-template',

  render: function () {
    this.$el.html(_.template(jetfuelexpress.TEMPLATES[this.templateName])());
    return this;
  }

});
