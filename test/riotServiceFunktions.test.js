var assert = require('chai').assert;
var expect = require('chai').expect;

var riotApi = require("../app/riotApi");
var googleDocs = require("../app/googleDocs");


describe('RiotApiService', function(){
  describe('#getNamesFromMessage()', function(){
    it('callback with formattedName and Summoner Name',function(done){
      riotApi.riotApi.getNamesFromMessage("-lol Skumbag Zelle",function(formattedName,summonerName){
        expect(formattedName).to.equal('skumbagzelle');
        expect(summonerName).to.equal('Skumbag Zelle');
        done()
      });
    })
  });
  describe('#getRank()', function(){
    it('should return the Rank as a String',function(done){
      riotApi.riotApi.getRank("-lol Skumbag Zelle",function(response){
        expect(response).to.be.a('string');
        done()
      });
    })
  });
  describe('#saveGameData()', function(){
    it('should return the Game Data as a String', function(done){
      this.timeout(5000)
      riotApi.riotApi.getLastGameData("-save Skumbag Zelle",function(response){
        expect(response).to.be.a('string');
        done()
      })
    })
  })
})




// In Progress
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
