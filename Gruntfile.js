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
        'src': ["public/javascripts/lib/jquery-1.10.1.min.js",
                "public/javascripts/lib/json3.min.js",
                "public/javascripts/lib/handlebars.js",
                "public/javascripts/lib/underscore-min.js",
                "public/javascripts/lib/backbone-min.js",
                "public/javascripts/lib/morris.min.js",
                "public/javascripts/session.js",
                "public/javascripts/app.js",
                "public/javascripts/routers/router.js",
                "public/javascripts/models/url_model.js",
                "public/javascripts/collections/url_collection.js",
                "public/javascripts/views/app_view.js",
                "public/javascripts/views/header_view.js",
                "public/javascripts/views/footer_view.js",
                "public/javascripts/views/shorten_view.js",
                "public/javascripts/views/home_view.js",
                "public/javascripts/views/url_view.js",
                "public/javascripts/views/urls_view.js"],

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
