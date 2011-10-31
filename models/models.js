var mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:3000/');

var Schema = mongoose.Schema;

var Room = new Schema({
    title       : String
  , description : String
  , obvExits    : String
  , allExits    : String
});
mongoose.model('Room', Room);
exports.room = mongoose.model('Room');
