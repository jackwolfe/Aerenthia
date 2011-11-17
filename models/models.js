var mongoose  = require('mongoose');
mongoose.connect('mongodb://nodejitsu:4ab52acefbaf122be5910d75e9ffdde2@staff.mongohq.com:10056/nodejitsudb432201101087');

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
