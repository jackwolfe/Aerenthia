var db = require('../models/models');

/*
 * GET Login Page
 */

exports.login = function(req, res){
  console.log('Reached the login route file.');
  db.user.findOne({name: req.body.loginUsername, password: req.body.loginPassword}, function(err, user){
    console.log(err, user);
    console.log('Called the db.');
    if(!user || (!user.alphaTester && !db.user_list[user.name]) ) {
      console.log('Checked the user.');
      res.redirect('/');
      console.log('No user found, or user is not in the alpha, back to index.');
    }else {
      console.log('Made it to the else.');
      req.session.user = user;
      user.alphaTester = true;
      user.save();
      console.log('Assigned user to her session.');
      res.redirect('/aerenthia');
      console.log('User found, and on list, redirected to the game.');
    };
  });
};
