if (typeof define !== 'function') {
	var define = require('amdefine')(module);
}

define(function(require) {
	var removeThe = function(string) {
		return string.replace(/^(a|an|the) (.*)/gi, '$2');
	}
	return {
		sort: function(strings, callback) {
			var result = strings.sort(function(a, b) {
				if (removeThe(a) < removeThe(b)) {
					return -1;
				} else if(removeThe(a) === removeThe(b)) {
					return 0;
				}
				return 1;
			});

			callback(result);
		}
	};
});