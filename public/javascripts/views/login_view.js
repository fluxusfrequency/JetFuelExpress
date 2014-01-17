var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.LoginView = Backbone.View.extend({
  templateName: 'login-template',

  render: function () {
    this.$el.html(_.template(jetfuelexpress.TEMPLATES[this.templateName])());
    return this;
  }

});
