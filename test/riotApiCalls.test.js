var assert = require('chai').assert;
var expect = require('chai').expect;

var riotApi = require("../app/riotApi");

describe('RiotApi', function(){
  describe('#getRank()', function(){
    it('should return the Rank as a String',function(done){
      riotApi.getRank("-lol Skumbag Zelle",function(response){
        expect(response).to.be.a('string');
        done()
      });
    })
  })
})

//In Progress
// describe('RiotApi', function(){
//   describe('#getGameInfo()', function(){
//     it('should return the Rank as a String',function(done){
//       riotApi.getGameInfo("-game Skumbag Zelle",function(response){
//         expect(response).to.be.a('string');
//         done()
//       });
//     })
//   })
// })
