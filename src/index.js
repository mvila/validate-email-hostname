'use strict';

import dns from 'dns';

export function validateEmailHostname(email) {
  if (!email) return Promise.resolve(false);
  if (typeof email !== 'string') return Promise.resolve(false);

  const hostname = email.split('@')[1];
  if (!hostname) return Promise.resolve(false);

  return dnsResolve(hostname, 'MX').then(okay => {
    if (okay) {
      return true;
    }
    return dnsResolve(hostname, 'A').then(okay => {
      return Boolean(okay);
    });
  });
}

function dnsResolve(hostname, rrtype) {
  return new Promise(function(resolve) {
    dns.resolve(hostname, rrtype, function(err, result) {
      resolve(err ? undefined : result);
    });
  });
}

export default validateEmailHostname;
