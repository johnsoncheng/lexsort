var lexsort = require('../lexsort');

describe('lexsort', function () {
	it('can sort an array of strings', function () {
		var result = lexsort.sort(['c', 'b', 'a']);
		expect(result).toEqual(['a', 'b', 'c']);
	});

	it('can sort ignoring "the"', function () {
		var result = lexsort.sort(['the zebra', 'the aardvark', 'monkey']);
		expect(result).toEqual([
			'the aardvark',
			'monkey',
			'the zebra'
		]);
	});

	it('can ignore all articles in english', function () {
		var result = lexsort.sort(['the zebra', 'an aardvark', 'a monkey']);
		expect(result).toEqual([
			'an aardvark',
			'a monkey',
			'the zebra'
		]);
	});

	it('can accept user defined articles to ignore', function () {
		expect(lexsort.getArticles()).toEqual(['a', 'an', 'the']);
		lexsort.setArticles(['a', 'an', 'the', 'y', 'yr', 'na']);
		expect(lexsort.getArticles()).toEqual(['a', 'an', 'the', 'y', 'yr', 'na']);
	});

	it('uses user defined articles', function () {
		var result = lexsort.sort(['y zebra', 'yr aardvark', 'na monkey']);
		expect(result).toEqual([
			'yr aardvark',
			'na monkey',
			'y zebra'
		]);
	})
});