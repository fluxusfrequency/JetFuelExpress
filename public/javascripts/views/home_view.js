var jetfuelexpress = jetfuelexpress || {};

(function () {
  jetfuelexpress.HomeView = Backbone.View.extend({
    template: Handlebars.compile($('#home-template').html()),

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });
})();
