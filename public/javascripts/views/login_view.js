var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.LoginView = Backbone.View.extend({
  template: _.template($('#login-template').html()),

  render: function () {
    this.$el.html(this.template());
    return this;
  }

});
