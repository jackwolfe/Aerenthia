/*
 * GET Aerenthia
 */

exports.aerenthia = function(req, res){
  if(req.session.user){
    console.log('User verified!');
    res.render('aerenthia', { 
      title: 'Aerenthia'
    , envhost: (process.env.NODE_ENV == 'production') ? 'http://aerenthia.nodejitsu.com' : 'http://localhost/'
    });
  }else {
    console.log('Invalid user! REJECTED!');
    res.redirect('/');
  };
};
