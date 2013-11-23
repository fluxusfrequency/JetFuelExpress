var jetfuelexpress = jetfuelexpress || {};

jetfuelexpress.UrlsView = Backbone.View.extend({
  el: '.url-list',

  initialize: function(initialUrls) {
    this.urlCollection = new jetfuelexpress.UrlCollection();
    var that = this;

    this.urlCollection.fetch({reset: true, success: function() {
      that.fetched = true; 
      }
    });
    
    this.render();

    this.listenTo(this.urlCollection, 'add', this.renderUrl);
    this.listenTo(this.urlCollection, 'reset', this.render);
  },

  render: function() {
    done = function() {
      this.$el.empty();
      this.urlCollection.each(function(item) {
        this.renderUrl(item);
      }, this);
    }

    interval = setInterval(function() {
      if this.fetched {
        cancelInterval(interval);
        done();
      }
    }, 50);
  },

  renderUrl: function(item) {
    var urlView = new jetfuelexpress.UrlView({
      model: item
    });
    this.$el.append(urlView.render().el);
  }

});