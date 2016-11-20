const dns = require('dns');
const http = require('http');

dns.setServers(['127.0.0.1']);

dns.resolve('mdobs.foo', (err, addresses) => {
  if(err) {
    console.log(err);
  }

  addresses.forEach(function(a) {
    console.log('Address');
    console.log(a);
    http.get('http://'+a+':3000', (res) => {
      console.log(res.statusCode);
      console.log(res.headers);
    });
  });
});

