var Proxyme = require('./lib/proxyme'),
    program = require('commander'),
    package = require('./package'),
    url = require('url'),
    port, to;

program
  .version(package.version)
  .option('--from <port>', 'Specify the port to run the server on. Default is 9000', Number, 9000)
  .option('--to <location>', 'Where requests should be proxied to. Format: host:port, host, :port', 'localhost:80')
  .parse(process.argv);

port = program.from;
to = program.to;

server = new Proxyme(to);
server.listen(port);

