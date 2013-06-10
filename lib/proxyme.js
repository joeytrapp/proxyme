var httpProxy = require('http-proxy'),
    http = require('http'),
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
  var proxy = new httpProxy.RoutingProxy();
  http.createServer(function (req, res) {
    proxy.proxyRequest(req, res, {
      host: this.host,
      port: this.port
    });
  }).listen(port);
  console.log('Proxyme server on localhost:' + port + ' forwarding to ' + this.host + ':' + this.port);
};
