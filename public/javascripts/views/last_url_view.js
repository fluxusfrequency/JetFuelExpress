var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.LastUrlView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#last-url-template').html()),

  render: function (item) {
    this.$el.empty();
    this.$el.append( this.template( item ) );
    return this;
  }

});