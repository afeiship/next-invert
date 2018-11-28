(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.invert = function (inObject) {
    var map = {};
    nx.each(inObject, function (key, value) {
      if (map[value] === undefined) {
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
