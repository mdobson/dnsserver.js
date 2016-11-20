const dns = require('dns');

dns.setServers(['127.0.0.1']);

dns.resolve('mdobs.foo', function(err, addresses) {
  if(err) {
    console.log(err);
  }

  addresses.forEach(function(a) {
    console.log('Address');
    console.log(a);
  });
});
