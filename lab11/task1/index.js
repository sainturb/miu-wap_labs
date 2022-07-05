const dns = require('node:dns');
const host1 = 'www.facebook.com';
dns.lookup(host1, (err, address, family) => {
  console.log(`address: %j family: IPv%s of ${host1}`, address, family);
});
const host2 = 'www.miu.edu';
dns.resolve4(host2, (err, addresses) => {
  if (err) throw err;
  console.log(`addresses: ${JSON.stringify(addresses)} of ${host2}`);
  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});
