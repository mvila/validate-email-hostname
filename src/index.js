'use strict';

import dns from 'dns';

export async function validateEmailHostname(email) {
  if (!email) return false;
  if (typeof email !== 'string') return false;

  const hostname = email.split('@')[1];
  if (!hostname) return false;

  if (await dnsResolve(hostname, 'MX')) return true;
  if (await dnsResolve(hostname, 'A')) return true;

  return false;
}

function dnsResolve(hostname, rrtype) {
  return new Promise(function(resolve) {
    dns.resolve(hostname, rrtype, function(err, result) {
      resolve(err ? undefined : result);
    });
  });
}

export default validateEmailHostname;
