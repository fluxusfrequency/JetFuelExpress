var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlView = Backbone.View.extend({
  className: 'urlContainer',
  template: _.template( $('#url-template').html() ),

  events: {
    'click .delete': 'deleteUrl',
    'click .edit': 'editUrl'
  },

  deleteUrl: function() {
    this.model.destroy();
    this.remove();
    return false;
  },

  editUrl: function() {
    this.model.update
  },

  render: function () {
    this.$el.append( this.template( this.model.toJSON() ) );
    return this;
  }
});
