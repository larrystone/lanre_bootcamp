// testing code goes here

'use strict';

const expect = require('chai').expect;
const myApp = require('../main.js');

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {


  it('should return [1,4] for [1, 2, 3 , 4]', function () {



  expect(findMinMax([1, 2, 3, 4]).toString() == [1, 4].toString());


  });


  it('should return [4, 6] for [6, 4]', function () {



  expect(findMinMax([6, 4]).toString() == [4, 6].toString());


  });


  it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {



  expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2]).toString() == [2, 78].toString());


  });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {


  it('should return [4] for [4, 4, 4, 4]', function () {



  expect(findMinMax([4, 4, 4, 4]).toString() == [4].toString());


  });

  });

}); 
})();