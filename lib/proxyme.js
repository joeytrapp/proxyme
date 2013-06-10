var httpProxy = require('http-proxy'),
    Proxyme;

Proxyme = module.exports = function(to) {
  var bits = to.split(':');
  if (bits.length > 2) {
    this.port = bits[2];
    this.host = bits[0] + ':' + bits[1];
  } else if (bits.length === 2) {
    this.port = bits[1];
    this.host = bits[0];
  } else {
    this.port = 80;
    this.host = bits[0];
  }
};

Proxyme.prototype.listen = function(port) {
  var self = this;
  httpProxy.createServer(function (req, res, proxy) {
    proxy.proxyRequest(req, res, {
      host: self.host,
      port: self.port
    });
  }).listen(port);
  console.log('Proxyme server on localhost:' + port + ' forwarding to ' + this.host + ':' + this.port);
};
