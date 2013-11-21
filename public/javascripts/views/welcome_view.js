var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.WelcomeView = Backbone.View.extend({
  template: Handlebars.compile($('#welcome-template').html()),

  render: function () {
    this.$el.html(this.template());
    return this;
  },

});
