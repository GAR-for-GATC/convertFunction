
//Gets all formulas in each .js file, return an associtive array.

var formulaList = {};

require('fs').readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    formulaList[name] = require('./' + file);
  }
});

module.exports = formulaList;