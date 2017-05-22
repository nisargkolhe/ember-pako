import { module, test } from 'qunit';
import pako from 'pako';

module('pako as an ES6 module');

test('it works', function(assert) {
  assert.ok(pako);
});