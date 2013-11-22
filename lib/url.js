var mongoose = require('mongoose');

var UrlSchema = new mongoose.Schema({
  originalUrl : String,
  slug        : String,
  active      : Boolean,
  visits      : Number,
  userId     : String,
  createdDate : Date,
});

UrlSchema.methods.to_obj = function() {
  obj = {
    originalUrl : this.originalUrl,
    slug        : this.slug,
    active      : this.active,
    visits      : this.visits,
    userId      : this.userId
  }
  return obj;
};

var Url = mongoose.model('Url', UrlSchema);

module.exports = Url;