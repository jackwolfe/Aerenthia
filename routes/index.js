/*
 * GET home page.
 */

exports.aerenthia = require('./aerenthia').aerenthia;

exports.index = function(req, res){
  res.render('index', { 
    title: 'Aerenthia'
  })
};

exports.login = require('./login').login;

exports.logout = require('./logout').logout;

exports.register = require('./register').register;
