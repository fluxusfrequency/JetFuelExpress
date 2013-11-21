exports.generate_link = function() {
  var result = '';
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = 6; i > 0; i--) {
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  }
  return result;
};
