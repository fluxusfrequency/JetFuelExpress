var mongoose = require('mongoose');

var UrlSchema = new mongoose.Schema(
  { originalUrl : { type: String, required: true, validate : [
              function(u) { return u.match(/^((http(?:s)?\:\/\/)?[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*\.[a-zA-Z]{2,6}(?:\/?|(?:\/[\w\-]+)*)(?:\/?|\/\w+\.[a-zA-Z]{2,4}(?:\?[\w]+\=[\w\-]+)?)?(?:\&[\w]+\=[\w\-]+)*)$/); },
              'Visits must be positive!'] },
    slug        : { type: String, required: true },
    active      : { type: Boolean, required: true },
    visits      : { type: Number, required: true, validate : [
              function(v) { return v >= 0; },
              'Visits must be positive!'] },
    userId      : { type: String, required: true },
    createdDate : { type: Date, required: true }});

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