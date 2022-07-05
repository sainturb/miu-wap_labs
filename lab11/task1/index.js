const dns = require('node:dns');

dns.lookup('www.miu.edu', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

dns.resolve4('www.miu.edu', (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
