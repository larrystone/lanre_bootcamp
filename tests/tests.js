// testing code goes here

'use strict';

const assert = require('chai').assert;
const myApp = require('../main.js');

describe("Get Prime Numbers", function() {
  it("should return [2,3] for getPrimes(4)", function() {
    assert.equal(myApp.getPrimes(4).toString(), [2,3].toString());
  })
})
