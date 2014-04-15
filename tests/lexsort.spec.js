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

	it('can accept user defined articles to ignore', function () {
		expect(lexsort.getArticles()).toEqual(['a', 'an', 'the']);
		lexsort.setArticles(['a', 'an', 'the', 'y', 'yr', 'na']);
		expect(lexsort.getArticles()).toEqual(['a', 'an', 'the', 'y', 'yr', 'na']);
	});

	it('uses user defined articles', function (done) {
		lexsort.sort(['y zebra', 'yr aardvark', 'na monkey'], function(result) {
			expect(result).toEqual([
				'yr aardvark',
				'na monkey',
				'y zebra'
			]);
			done();
		});
	})
});