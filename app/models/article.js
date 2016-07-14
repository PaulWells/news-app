// Example model

function Article (opts) {
  if(!opts) opts = {};
  this.title = opts.title || 'Best Article';
  this.url = opts.url || 'http://bestarticle.com';
  this.text = opts.text || 'The best article text';
}

module.exports = Article;
