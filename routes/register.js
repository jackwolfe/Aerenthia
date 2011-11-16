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
    user.save();
  };
  var testSlug = req.body.regUsername.toLowerCase().replace(/[^a-z A-Z 0-9]+/g, '');
  db.user.findOne({slug: testSlug}, function(err, user){
    if(!user){
      createUser();
      console.log('Assigned this user to her session.');
      res.redirect('/aerenthia');
    }else {
      res.redirect('/');
    };
  });
};
