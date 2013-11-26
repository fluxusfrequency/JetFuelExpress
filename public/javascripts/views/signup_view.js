var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.SignupView = Backbone.View.extend({
  template: _.template($('#signup-template').html()),

  render: function () {
    this.$el.html(this.template());
    return this;
  }

});
