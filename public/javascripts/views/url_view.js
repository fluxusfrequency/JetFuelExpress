var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlView = Backbone.View.extend({
  className: 'urlContainer',
  template: Handlebars.compile($('#url-template').html() ),

  events: {
    'click .delete': 'deleteUrl'
  },

  deleteUrl: function() {
    this.model.destroy();
    this.remove();
    return false;
  },

  render: function () {
    this.$el.append( this.template( this.model.toJSON() ) );
    return this;
  }
});
