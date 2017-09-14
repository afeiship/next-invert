(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var UNDEFINED = 'undefined';

  nx.invert = function (inObject) {

    var map = {};
    nx.each(inObject, function (key, value) {
      if (typeof map[value] === UNDEFINED) {
        map[value] = [key];
      } else {
        map[value].push(key);
      }
    });

    return map;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.invert;
  }

}());
