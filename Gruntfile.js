module.exports = function (grunt) {

  grunt.initConfig({

    connect: {
      server: {
        options: { port: "3000",
                   hostname: "localhost",
                   keepalive: true }
      }
    },

    uglify: {
      build: {
        files: {
          'main.js': ['main.js']
        }
      }
    },
    concat: {
      files: {
        'src': ["javascripts/lib/jquery-1.10.1.min.js",
                "javascripts/lib/json3.min.js",
                "javascripts/lib/underscore-min.js",
                "javascripts/lib/backbone-min.js",
                "javascripts/lib/jquery-ui-1.10.3.custom.min.js",
                "javascripts/app.js",
                "javascripts/routers/router.js",
                "javascripts/models/url_model.js",
                "javascripts/collections/url_collection.js",
                "javascripts/views/app_view.js",
                "javascripts/views/header_view.js",
                "javascripts/views/footer_view.js",
                "javascripts/views/welcome_view.js",
                "javascripts/views/home_view.js",
                "javascripts/views/url_view.js",
                "javascripts/views/urls_view.js",
                "javascripts/views/login_view.js",
                "javascripts/views/signup_view.js",
                "javascripts/views/last_url_view.js"],

        'dest': 'main.js',
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['concat', 'uglify']);

  grunt.registerTask('default', ['build']);
};
