var jetfuelexpress = jetfuelexpress || {};

(function () {
  jetfuelexpress.AppView = Backbone.View.extend({
    
    initialize: function() {
      _.bindAll(this, 'render', 'showHeader');

      this.render();
    },

    render: function () {
      this.$main = $('#main');
      
      this.showHeader();
      this.showHome();
      this.showFooter();

      return this;
    },

    showHeader: function() {
      var view = new jetfuelexpress.HeaderView();
      $('header').html(view.render().el);
    },

    showFooter: function() {
      var view = new jetfuelexpress.FooterView();
      $('footer').html(view.render().el);
    },

    showHome: function() {
      var view = new jetfuelexpress.HomeView();
      this.showView(view);
    },

    showView: function(view) {
      this.$main.html(view.render().el);
    }
  });
})();
