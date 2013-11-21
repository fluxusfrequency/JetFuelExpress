var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlView = Backbone.View.extend({
  tagName: 'li',
  className: 'urlContainer',
  template: Handlebars.compile($('#url-template').html() ),

  events: {
    'click .delete': 'deleteUrl'
  },

  deleteUrl: function() {
    this.model.destroy();
    this.remove();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON() ));
    return this;
  }
});
