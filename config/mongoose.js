var config = require('./config'),
mongoose = require('mongoose');
require('mongo-relation');

module.exports = function(){
  var db = mongoose.connect(config.db);

  require('../app/models/user.server.model');
  require('../app/models/product.server.model');
  require('../app/models/post.server.model');

  return db;
}
