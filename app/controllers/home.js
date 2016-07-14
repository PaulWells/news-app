var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');
  
var request = require('request-promise');
var feed = require('feed-read');
var bluebird = require('bluebird');


module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = fetchArticles()
    .then(function (articles) {
        res.render('index', {
            title: 'News App',
            articles: articles
        });
    });
});

var fetchArticles = function () {
    return new Promise(function (resolve, reject) {
        feed('http://rss.msn.com/en-us/money?feedoutput=rss', function (err, articles) {
            if (err) {
                reject(err);
                return;
            }
            resolve(articles);
        });
    });
}
