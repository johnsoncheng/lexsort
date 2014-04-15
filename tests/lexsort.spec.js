var lexsort = require('../lexsort');

describe('lexsort', function () {
	it('can sort an array of strings', function (done) {
		lexsort.sort(['c', 'b', 'a'], function(result) {
			expect(result).toEqual(['a', 'b', 'c']);
			done();
		});
	});
});