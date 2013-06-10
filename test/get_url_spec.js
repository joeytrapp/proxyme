var expect = require('chai').expect,
    GetUrl = require('../lib/get_url').GetUrl

describe('GetUrl', function() {
  it('takes just a number and uses that as port', function() {
    var url = new GetUrl(9000);
    expect(url.host).to.equal('localhost');
    expect(url.port).to.equal(9000);
  });
});
