var jetfuelexpress = jetfuelexpress || {};


jetfuelexpress.SignupView = Backbone.View.extend({
  template: Handlebars.compile($('#signup-template').html()),

  render: function () {
    this.$el.html(this.template());
    return this;
  }

});
