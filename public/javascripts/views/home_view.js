var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.HomeView = Backbone.View.extend({
  template: Handlebars.compile($('#home-template').html()),
  events: {
    'click #submit-link-button': 'submitLink'
  },

  initialize: function() {
    this.urlCollection = new jetfuelexpress.UrlCollection();
    this.urlCollection.fetch({reset: true});
    this.render();

    this.listenTo(this.urlCollection, 'add', this.renderUrl);
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  renderUrl: function(item) {
    var urlView = new jetfuelexpress.UrlView({
      model: item
    });
    this.$el.append(urlView.render().el);
  },

  submitLink: function(e) {
    e.preventDefault();

    var formData = {};

    $('#url-form').children('input').each(function(i, el) {
      if( $(el).val() !== '') {
        formData[el.id] = $(el).val();
      }
    });

    this.urlCollection.create(formData);
  },


});
