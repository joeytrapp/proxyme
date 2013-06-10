var url = require('url'),
    GetUrl;

GetUrl = function(str) {
  this.raw = str;
  this.parsed = false;
  this.defaults = {
    protocol: 'http://',
    host: 'localhost',
    port: '9000'
};

GetUrl.prototype.toUrl = function() {
  this.parse(); 
};

GetUrl.prototype.parse = function() {
};

module.exports = {
  parse: function(str) {
    var parser = new GetUrl(str);
    return parser.toUrl();
  },
  GetUrl: GetUrl
};

