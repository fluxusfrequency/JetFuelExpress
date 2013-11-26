var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlView = Backbone.View.extend({
  className: 'urlContainer',
  template: _.template( $('#url-template').html() ),

  events: {
    'click .cancel': 'cancel',
    'click .delete': 'deleteUrl',
    'click .edit': 'editUrl',
    'click .save': 'submitEdit'
  },

  cancel: function(e) {
    e.preventDefault();
    this.$el.html('');
    this.render();
  },

  deleteUrl: function() {
    this.model.destroy();
    this.remove();
    return false;
  },

  editUrl: function(e) {
    e.preventDefault();

    var edit_template = _.template($('#url-edit-template').html());
    this.$el.html(edit_template());
    return this;
  },

  submitEdit: function(e) {
    e.preventDefault();
    var slug = this.model.attributes.slug;
    var newSlug = this.$('#newSlug').val();
    var newOriginal = this.$('#newOriginal').val();
    var active = this.$('#active').val();
    $.ajax({
      url: '/api/urls/:slug',
      type: 'PUT',
      dataType: 'json',
      data: { "slug": slug, "newSlug": newSlug, "newOriginal": newOriginal, "active": active },
      success: function(data) {
        $('#editArticle').remove();
        jetfuelexpress.urlCollection.add(data);
      }
    });
  },

  render: function () {
    this.$el.append( this.template( this.model.toJSON() ) );
    return this;
  }
});
