/*
 * GET home page.
 */

exports.aerenthia = require('./aerenthia').aerenthia;

exports.codex = require('./codex').codex;

exports.index = function(req, res){
  res.render('index', { 
    title: 'Aerenthia'
  })
};

exports.login = require('./login').login;

exports.logreg = require('./logreg').logreg;

exports.logout = require('./logout').logout;

exports.register = require('./register').register;
