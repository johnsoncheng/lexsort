if (typeof define !== 'function') {
	var define = require('amdefine')(module);
}

define(function(require) {
	return {
		sort: function(strings, callback) {
			callback(strings.sort());
		}
	};
});