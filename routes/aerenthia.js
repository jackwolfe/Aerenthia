/*
 * GET Aerenthia
 */

exports.aerenthia = function(req, res){
  if(req.session.user){
    console.log('User verified!');
    res.render('aerenthia', { 
      title: 'Aerenthia'
    });
  }else {
    console.log('Invalid user! REJECTED!');
    res.redirect('/');
  };
};
