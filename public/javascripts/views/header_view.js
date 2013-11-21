var jetfuelexpress = jetfuelexpress || {};

define([
  'jquery',
  'handlebars',
  'underscore',
  'backbone',
  'text!templates/header.hbs'
  ], function($, Handlebars, _, Backbone, headerTemplate){

  jetfuelexpress.HeaderView = Backbone.View.extend({
    template: Handlebars.compile(headerTemplate),

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
  return jetfuelexpress.HeaderView;
});