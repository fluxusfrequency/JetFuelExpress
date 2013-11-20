var jetfuelexpress = jetfuelexpress || {};

(function () {
  jetfuelexpress.FooterView = Backbone.View.extend({
    template: Handlebars.compile($('#footer-template').html()),

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });
})();
