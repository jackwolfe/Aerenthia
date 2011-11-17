
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , app = module.exports = express.createServer()
  , io = require('socket.io').listen(app);
var db = require('./models/models');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

var createRoom = function(){
  var room = new db.room();
  room.name = '[The Void]';
  room.description = 'Before what should be you, but is not you, stretches a vast emptiness as far as your non-existant eyes can see.';
  room.allExits = 'None.';
  room.obvExits = 'None.';
  room.save();
};
db.room.findOne({name: '[The Void]'}, function(err, room){
  if (!room){
    createRoom();
    console.log('New room created!');
  };
});


// Routes

app.get('/', routes.index);

app.get('/aerenthia', routes.aerenthia);

app.post('/login', routes.login);

app.get('/logout', routes.logout);

app.post('/register', routes.register);


// Realtime Connection

io.sockets.on('connection', function (socket) {
  var sendRoom = function(){
    db.room.findOne({obvExits: 'None.'}, function(err, room){
      socket.emit('room', room);
      console.log('sent emit.');
      console.log("room:");
      console.log("err:");
    });
  };
  sendRoom();
  var error = function(){
    socket.emit('error', "Even if you did exist, that probably still wouldn't be a very good idea.")
  };
  socket.on('command', function (command) {
    var say = /^say |^Say |^\"|^\'/
    var saySearch = command.search(say);
    var saySplit = command.split(say);
    var sayMessage = saySplit[1];
    var speak = function(){
      socket.broadcast.emit('speak', "The Void shudders as voiceless Words spill into existence, \""+sayMessage+"\"");
      socket.emit('speak', "The Void shudders as voiceless Words spill into existence, \""+sayMessage+"\"");
    };
    if(command == "look"){
      sendRoom();
    }else if(saySearch == 0){
      speak();
    }else if(command){
      error();
    };
    console.log(command);
  });
});
// End Realtime Connection

app.listen(80);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
