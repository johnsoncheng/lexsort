if (typeof define !== 'function') {
	var define = require('amdefine')(module);
}

define(function(require) {
	var removeArticles = function(string) {
			var regex = new RegExp(
				'^(' + articles.join('|') + ') (.*)', 'gi'
			);
			return string.replace(regex, '$2');
		},
		articles = ['a', 'an', 'the'];

	return {
		getArticles: function () {
			return articles;
		},
		setArticles: function (values) {
			articles = values;
		},
		sort: function(strings, callback) {
			var result = strings.sort(function(a, b) {
				if (removeArticles(a) < removeArticles(b)) {
					return -1;
				} else if(removeArticles(a) === removeArticles(b)) {
					return 0;
				}
				return 1;
			});

			callback(result);
		}
	};
});