var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.WelcomeView = Backbone.View.extend({
  template: _.template($('#welcome-template').html()),

  render: function () {
    this.$el.html(this.template());
    return this;
  }

});
