var jetfuelexpress = jetfuelexpress || {};

(function () {
  jetfuelexpress.HeaderView = Backbone.View.extend({
    template: Handlebars.compile($('#header-template').html()),

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });
})();
