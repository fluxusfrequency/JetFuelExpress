var jetfuelexpress = jetfuelexpress || {};

(function () {
  jetfuelexpress.ContentView = Backbone.View.extend({
    template: Handlebars.compile($('#main').html()),

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });
})();
