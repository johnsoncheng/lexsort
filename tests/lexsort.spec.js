var lexsort = require('../lexsort');

describe('lexsort', function () {
	it('can sort an array of strings', function (done) {
		lexsort.sort(['c', 'b', 'a'], function(result) {
			expect(result).toEqual(['a', 'b', 'c']);
			done();
		});
	});

	it('can sort ignoring "the"', function (done) {
		lexsort.sort(['the zebra', 'the aardvark', 'monkey'], function(result) {
			expect(result).toEqual([
				'the aardvark',
				'monkey',
				'the zebra'
			]);
			done();
		});
	});

	it('can ignore all articles in english', function (done) {
		lexsort.sort(['the zebra', 'an aardvark', 'a monkey'], function(result) {
			expect(result).toEqual([
				'an aardvark',
				'a monkey',
				'the zebra'
			]);
			done();
		});
	});
});