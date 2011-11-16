var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost/aerenthia');

var Schema = mongoose.Schema;

var User = new Schema({
    name        : String
  , email       : String
  , password    : String
  , userID      : String
  , slug        : {type: String, unique: true}
  , createdAt   : Date
  , alphaTester : Boolean
});
mongoose.model('User', User);
exports.user = mongoose.model('User');

var Room = new Schema({
    name        : String
  , description : String
  , obvExits    : String
  , allExits    : String
});
mongoose.model('Room', Room);
exports.room = mongoose.model('Room');
