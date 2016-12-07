/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
const path = require('path');

module.exports = function() {
    var file = this.resourcePath.split('\\').slice(-1)[0];
    return "try {global.process.dlopen(module, __dirname +'/'+ '" + file + "'); } catch(e) {" +
        "throw new Error('Cannot open ' + __dirname +'/'+ '" + file + "' + ': ' + e);}";
};