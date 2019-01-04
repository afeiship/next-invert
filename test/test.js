var nx = require('next-js-core2');
require('../src/next-invert');

test('next/invert', function() {
  var object = { a: 1, b: 2, c: 1 };
  var rs1 = nx.invert(object);

  // console.log(rs1);

  expect(rs1).toEqual({ '1': ['a', 'c'], '2': ['b'] });
});

test('next/invert', function() {
  var object = { a: 1, b: 2, c: 1, items: [], items1: [], items2: [{ k1: 'v1' }] };
  var rs1 = nx.invert(object);

  // console.log(rs1);

  expect(rs1).toEqual({
    '1': ['a', 'c'],
    '2': ['b'],
    '': ['items', 'items1'],
    '[object Object]': ['items2']
  });
});
