var db = require('../models/models');

/*
 * GET Register Page
 */

exports.register = function(req, res){
  var createUser = function(){
    var user = new db.user();
    user.name = req.body.regUsername;
    user.email = req.body.regEMail;
    user.password = req.body.regPassword
    user.slug = user.name.toLowerCase().replace(/[^a-z A-Z 0-9]+/g, '');
    user.createdAt = new Date();
    req.session.user = user;
    console.log('Assigned this user to her session.');
    if (!user.alphaTester && !db.user_list[user.name]) {
      res.redirect('/');
      user.save();
    } else {
      user.alphaTester = true;
      user.save();
      res.redirect('/aerenthia');
    }
  };
  var testSlug = req.body.regUsername.toLowerCase().replace(/[^a-z A-Z 0-9]+/g, '');
  db.user.findOne({slug: testSlug}, function(err, user){
    if(!user){
      createUser();
    }else {
      res.redirect('/');
    };
  });
};
