'use strict';

import { assert } from 'chai';
import validateEmailHostname from './';

describe('validateEmailHostname', function() {
  it('should return false for undefined, null, empty or non string', async function() {
    assert.isFalse(await validateEmailHostname());
    assert.isFalse(await validateEmailHostname(null));
    assert.isFalse(await validateEmailHostname(''));
    assert.isFalse(await validateEmailHostname(123));
  });

  it('should return false if the hostname part is missing', async function() {
    assert.isFalse(await validateEmailHostname('nobody'));
  });

  it('should return true for a valid email', async function() {
    assert.isTrue(await validateEmailHostname('steve@apple.com'));
  });

  it('should return false for a fake email', async function() {
    assert.isFalse(await validateEmailHostname('nobody@ynvhunb87cjd.fr'));
  });
});
