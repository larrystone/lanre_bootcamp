// testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../main.js');

describe("Get Prime Numbers", function() {
  it("should return [2,3] for getPrimes(4)", function() {
    assert.equal(myApp.getPrimes(4).toString(), [2,3].toString());
  })

  it("should return [2,3,5] for getPrimes(6)", function() {
    assert.equal(myApp.getPrimes(6).toString(), [2,3, 5].toString());
  })

  it("should return [2] for getPrimes(2)", function() {
    assert.equal(myApp.getPrimes(2).toString(), [2].toString());
  })

  it("should return [2,3] for getPrimes(3)", function() {
    assert.equal(myApp.getPrimes(3).toString(), [2,3].toString());
  })

  it("should return [2,3,5,7] for getPrimes(8)", function() {
    assert.equal(myApp.getPrimes(8).toString(), [2,3,5,7].toString());
  })

  it("should return [2,3,5,7,11,13,17,19] for getPrimes(20)", function() {
    assert.equal(myApp.getPrimes(20).toString(), [2,3,5,7,11,13,17,19].toString());
  })
})

describe("Get Prime Numbers for edge cases", function() {
  it("should return [] for getPrimes(1)", function() {
    assert.equal(myApp.getPrimes(1).toString(), [].toString());
  })  

  it("should return [] for getPrimes(0)", function() {
    assert.equal(myApp.getPrimes(0).toString(), [].toString());
  })

  it("should return [] for getPrimes(-1)", function() {
    assert.equal(myApp.getPrimes(-1).toString(), [].toString());
  })

  it("should return [] for getPrimes(-8)", function() {
    assert.equal(myApp.getPrimes(-8).toString(), [].toString());
  })

  it("should return [] for getPrimes(-100)", function() {
    assert.equal(myApp.getPrimes(-100).toString(), [].toString());
  })
})