/*
 * Get logout
 */
console.log('User was successfully redirected.');
exports.logout = function(req, res){
  delete req.session.user;
  console.log('Deleted the user property of the session.');
  res.redirect('/');
  console.log('redirected to index.');
};
