lexsort
=======
![](https://travis-ci.org/middric/lexsort.svg?branch=master)

## Install
```
npm install lexsort
```

## Example
```js
lexsort.sort(['the zebra', 'the aardvark', 'monkey']); //=> ['the aardvark', 'monkey', 'the zebra']

lexsort.setArticles(['the', 'a', 'an']);
lexsort.sort(['the zebra', 'an aardvark', 'a monkey']); //=> ['an aardvark', 'a monkey', 'the zebra']
```
