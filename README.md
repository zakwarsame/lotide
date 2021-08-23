# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zakwarsame/lotide`

**Require it:**

`const _ = require('@zakwarsame/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: a function that retrieves the first element from an array
* `tail`: a function that retrieves every element except the first element of an array
* `middle`: a function that returns the middle element of an array
* `eqArrays`: a function that compares two arrays
* `assertArraysEqual`: a function that asserts if two arrays are equals
* `assertEqual`: a function that asserts if two values are equals
