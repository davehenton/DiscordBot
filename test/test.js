
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


var general = require('../app/general');
describe('General', function(){
  describe('#time()', function(){
    it('should display the time',function(){
      var time = general.basicFunctions.getTime()
      assert.ok(time,'some value')
    })
  })
})
