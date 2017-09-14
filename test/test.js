var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-invert');

describe('next/invert', function () {

  it('nx.invert with multiple', function () {
    var object = { 'a': 1, 'b': 2, 'c': 1 };
    var rs1 = nx.invert( object );

    console.log(
      rs1
    );

    assert.deepEqual(rs1, { '1': ['a', 'c'], '2': 'b' });
  });

});
