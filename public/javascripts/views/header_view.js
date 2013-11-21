var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.HeaderView = Backbone.View.extend({
  template: Handlebars.compile($('#header-template').html()),

  events: {
    'click .brand': "showHome"
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  showHome: function() {
    Backbone.history.navigate('', { trigger: true });
  }

});