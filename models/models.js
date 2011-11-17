var mongoose  = require('mongoose');
var mongohost = (process.env.NODE_ENV == 'production') ? 'mongodb://nodejitsu:4ab52acefbaf122be5910d75e9ffdde2@staff.mongohq.com:10056/nodejitsudb432201101087' : 'mongodb://localhost/aerenthia';
console.log("Using database: "+mongohost);
mongoose.connect(mongohost);

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

exports.user_list = {
  techwraith: true
, Jack: true
, jeffreykaine: true
, orionsreverie: true
, Rockeye: true
}
