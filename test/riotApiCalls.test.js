var assert = require('assert');
var expect = require('chai').expect;
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var https = require('https');

var riotApi = require("../app/riotApi");

describe('RiotApi', function(){
  describe('#getSummonerId', function(){
    beforeEach(function() {
      this.request = sinon.stub(https, 'get');

    });
    afterEach(function() {
      https.get.restore();
    })
    it('should get the summoner id',function(done){
      var expected = {"skumbagzelle": {"id": 100,"name": "Skumbag Zelle","profileIconId": 666,"revisionDate": 1488038001000,"summonerLevel": 1}};
  	var response = new PassThrough();
  	response.write(JSON.stringify(expected));
  	response.end();

  	var request = new PassThrough();

  	this.request.callsArgWith(1, response)
  	            .returns(request);


    var summoners = []
    summoners[0] = {
      id: 'default',
      name: 'Skumbag Zelle',
      formattedName: 'skumbagzelle',
      soloQ: {
        tier: 'default',
        division: 'default'
      },
      flexQ: {
        tier: 'default',
        division: 'default'
      }
    }

  	riotApi.apiFunctions.getSummonerId(summoners).then(function(summoners){
      expect(summoners[0].id).to.equal(100);
      done()
    });

  });
  describe('#getSummonerRank', function(){
    it('should get the summoner Ranks',function(){

      });
  });
  describe('#getParticipants', function(){
    it('should get the summoners of actual game',function(){

      });
  });
  describe('#getChampionName', function(){
    it('should get name of champion id',function(){

      });
  });
  describe('#getRecentGameData', function(){
    it('should get the data of the last game',function(){

      });
  });
})
})
