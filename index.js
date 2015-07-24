/**
 * Module Dependencies
 */

var strtojs = require('string-to-js');

/**
 * Export `string-to-js`
 */

module.exports = plugin;

/**
 * Initialize `plugin`
 *
 * @param {Object} file
 * @param {Object} entry
 */

function plugin() {
  return function stoj(file, entry) {
    if (entry.type !== 'js') return;
    if (file.type === 'js') return;

    file.src = file.type === 'json'
      ? 'module.exports = ' + file.src + ';'
      : strtojs(file.src);
    file.type = 'js';
  };
}
