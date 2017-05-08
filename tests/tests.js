// testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../main.js');

describe("Get Prime Numbers", function() {
  it("should return [2,3] for getPrime(4)", function() {
    assert.equal(myApp.getPrime(4), [2,3]);
  })
})
