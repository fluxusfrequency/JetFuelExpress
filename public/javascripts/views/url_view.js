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

  editUrl: function(e) {
    e.preventDefault();
    var formData={};

    var template = _.template($('#url-edit-template').html());
    this.model.update()
  },

  submitEdit: function() {
    $.ajax({
      url: '/api/urls',
      type: 'POST',
      dataType: 'json',
      data: { "originalUrl": new_link },
      success: function(data) {
        if(jetfuelexpress.current_user) {
          Backbone.history.navigate('feed', {trigger: (Backbone.history.loc === 'feed' ? false : true)});
          jetfuelexpress.urlCollection.add(data);
        } else {
          Backbone.history.navigate('shorten', {trigger: false});
          jetfuelexpress.appView.showLastUrl(data);
        }
      },
  }

  render: function () {
    this.$el.append( this.template( this.model.toJSON() ) );
    return this;
  }
});
