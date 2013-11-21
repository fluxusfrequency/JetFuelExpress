var jetfuelexpress = jetfuelexpress || {};

define([
  'jquery',
  'handlebars',
  'underscore',
  'backbone',
  'text!templates/url.hbs'
  ], function($, Handlebars, _, Backbone, urlTemplate){


  jetfuelexpress.UrlView = Backbone.View.extend({
    className: 'urlContainer',
    template: Handlebars.compile(urlTemplate),

    events: {
      'click .delete': 'deleteUrl'
    },

    deleteUrl: function() {
      this.model.destroy();
      this.remove();
      return false;
    },

    render: function () {
      this.$el.html( this.template( this.model.toJSON() ) );
      return this;
    }
  });
  return jetfuelexpress.UrlView;
});