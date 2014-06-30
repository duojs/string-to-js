/**
 * Module Dependencies
 */

var strtojs = require('string-to-js');

/**
 * Export `string-to-js`
 */

module.exports = plugin;

/**
 * Regexp
 */

var rtype = /^(html|json|css)$/;

/**
 * Initialize `plugin`
 *
 * @param {Object} file
 * @param {Object} duo
 */

function plugin() {
  return function (file, duo) {
    if ('js' != duo.type) return;
    if (!rtype.test(file.type)) return;
    file.src = strtojs(file.src);
    file.type = 'js';
  }
}
