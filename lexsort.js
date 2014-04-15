if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function(require) {
    var removeArticles = function(string) {
            if (!articleRegex) {
                articleRegex = new RegExp(
                    '^(' + articles.join('|') + ') (.*)', 'gi'
                );
            }
            return string.replace(articleRegex, '$2');
        },
        articles = ['a', 'an', 'the'],
        articleRegex;

    return {
        getArticles: function () {
            return articles;
        },
        setArticles: function (values) {
            articles = values;
            articleRegex = null;
        },
        sort: function(strings) {
            var result = strings.sort(function(a, b) {
                var cleanA = removeArticles(a),
                    cleanB = removeArticles(b);

                if (cleanA < cleanB) {
                    return -1;
                } else if (cleanA === cleanB) {
                    return 0;
                }
                return 1;
            });

            return result;
        }
    };
});