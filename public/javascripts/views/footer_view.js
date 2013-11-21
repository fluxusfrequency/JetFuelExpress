var jetfuelexpress = jetfuelexpress || {};

define([
  'jquery',
  'handlebars',
  'underscore',
  'backbone',
  'text!templates/footer.hbs'
  ], function($, Handlebars, _, Backbone, footerTemplate){

  jetfuelexpress.FooterView = Backbone.View.extend({
    template: Handlebars.compile(footerTemplate),

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });
  return jetfuelexpress.FooterView;
});
