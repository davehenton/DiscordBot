var assert = require('assert');
var expect = require('chai').expect;
var sinon = require('sinon');
var PassThrough = require('stream').PassThrough;
var https = require('https');

var riotApi = require("../app/riotApi");

describe('RiotApi', function(){
  beforeEach(function() {
    this.request = sinon.stub(https, 'get');

  });
  afterEach(function() {
    https.get.restore();
  })
  describe('#getSummonerId', function(){
    it('should get the summoner id',function(done){
    var expected = require('./riotApiCallsExamples/responseSummonerId.json');
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
  });
  describe('#getSummonerRank', function(){
    it('should get the summoner Ranks',function(done){
      var expected = require('./riotApiCallsExamples/responseSummonerRank.json');
    	var response = new PassThrough();
    	response.write(JSON.stringify(expected));
    	response.end();

    	var request = new PassThrough();

    	this.request.callsArgWith(1, response)
    	            .returns(request);


      var summoners = []
      summoners[0] = {
        id: '48918098',
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

    	riotApi.apiFunctions.getSummonerRank(summoners).then(function(summoners){
        expect(summoners[0].soloQ.tier).to.equal("PLATINUM");
        expect(summoners[0].soloQ.division).to.equal("II");
        expect(summoners[0].flexQ.tier).to.equal("PLATINUM");
        expect(summoners[0].flexQ.division).to.equal("V");
        done()
      });
    });
  });
  describe('#getParticipants', function(){
    it('should get the summoners of actual game',function(done){
      var expected = require('./riotApiCallsExamples/responseParticipants.json');
      var response = new PassThrough();
      response.write(JSON.stringify(expected));
      response.end();

      var request = new PassThrough();

      this.request.callsArgWith(1, response)
                  .returns(request);


      var summonerId = "26174718"

      riotApi.apiFunctions.getParticipants(summonerId).then(function(summoners){

          expect(summoners[0].id).to.equal(26174718);
          expect(summoners[0].name).to.equal('ENJOY Jhin Tonic');

          expect(summoners[1].id).to.equal(49654177);
          expect(summoners[1].name).to.equal('K1ngF1ght3r');

          expect(summoners[2].id).to.equal(96766800);
          expect(summoners[2].name).to.equal('Quickster v1');

          expect(summoners[3].id).to.equal(46334838);
          expect(summoners[3].name).to.equal('J3r E');



        done()
      });


      });
  });
  describe('#getChampionName', function(){
    it('should get name of champion id',function(){

      });
  });
  describe('#getRecentGameData', function(){
    it('should get the data of the last game',function(done){
      var expected = require('./riotApiCallsExamples/responseRecentGameData.json');
      var response = new PassThrough();
      response.write(JSON.stringify(expected));
      response.end();

      var request = new PassThrough();

      this.request.callsArgWith(1, response)
                  .returns(request);


      var summonerId = "48918098"

      riotApi.apiFunctions.getRecentGameData(summonerId).then(function(gameData){

          expect(gameData.gameId).to.equal(3078066878);
          expect(gameData.team).to.equal(100);
          expect(gameData.win).to.equal(false);

        done()
      });
    });
  });
});
