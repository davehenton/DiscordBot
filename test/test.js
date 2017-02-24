var assert = require('chai').assert;
var expect = require('chai').expect;
var general = require('../app/general');

describe('General', function(){
  describe('#time()', function(){
    it('should return the time as a String',function(){
      var time = general.basicFunctions.getTime()
      expect(time).to.be.a('string');
    })
  })
})
