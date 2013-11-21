 require.config({
   paths: {
     jquery: 'lib/jquery-1.10.1.min',
     handlebars: 'lib/handlebars',
     json3: 'lib/json3',
     underscore: 'libc/underscore-min',
     backbone: 'lib/backbone-min',
     text: 'lib/text'
   }

 });

 require(['app'], function(jetfuelexpress.AppView){
   var app_view = new jetfuelexpress.AppView;
 });