/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    title: 'Aerenthia',
    room: {
      title: 'The Void',
      description: 'Before what should be you, but is not you, stretches a vast emptiness as far as your non-existant eyes can see.',
      exits: 'None.'
    }
  })
};
