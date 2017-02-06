var request = require('request');
var rankedClass = require('./class.rankedInfo.js');
var participantsClass = require('./class.participant.js');

functions = {

//Call der mir SummonerId liefert
  getId: function (summonerName){
    var summonerId = 0;
    request.get(
        'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+summonerName+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var s = summonerName;
                summonerId = body[s].id;

            }
            if (error) {
              console.log(error);
            }

         }
    );
    while (summonerId == 0) {
      require('deasync').runLoopOnce();
    }
    return summonerId;
  },

  //Call der mir daten liefert
  getData: function (summoner){
    var summonerId = summoner.summonerId;

    request.get(
        'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/'+summonerId+'/entry?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
              console.log("hier")
              try{

                summoner.setSoloqTier(body[summonerId][0].tier);
                summoner.setSoloqDivision(body[summonerId][0].entries[0].division);

              } catch (TypeError) {

                summoner.setSoloqTier("404");
                summoner.setSoloqDivision("404");

              }
              try{

                summoner.setFlexqTier(body[summonerId][1].tier);
                summoner.setFlexqDivision(body[summonerId][1].entries[0].division);
              } catch (TypeError) {


                summoner.setFlexqTier("404");
                summoner.setFlexqDivision("404");
              }


            }
            if (error) {
                console.log(error);
            }

         }
    );

    while (summoner.SoloqTier === undefined ) {
      console.log("hier");
      require('deasync').runLoopOnce();
    }
    return summoner;
  },

  getParticipants: function (summonerId){
    var participants = [];

    request.get(
        'https://euw.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/EUW1/'+summonerId+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {

              for(i = 0; i < 10; i++){
                participants[i] = new participantsClass(body.participants[i].summonerName,body.participants[i].summonerId);

              }
            }
            if (error) {
                console.log(error);
            }

         }
    );

    while (participants[0] === undefined) {
      require('deasync').runLoopOnce();
    }
    return participants;
  },

  getGameData: function (summoners){

  request.get(
        'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/'+summoners[0].summonerId+","+summoners[1].summonerId+","+summoners[2].summonerId+","+summoners[3].summonerId+","+summoners[4].summonerId+","+summoners[5].summonerId+","+summoners[6].summonerId+","+summoners[7].summonerId+","+summoners[8].summonerId+","+summoners[9].summonerId+'/entry?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {

              for(i=0; i< 10; i++){
                try{
                  summoners[i].setSoloqTier(body[summoners[i].summonerId][0].tier);
                  summoners[i].setSoloqDivision(body[summoners[i].summonerId][0].entries[0].division);
                } catch (TypeError) {
                  summoners[i].setSoloqTier("404");
                  summoners[i].setSoloqDivision("404");
                }
                try{
                  summoners[i].setFlexqTier(body[summoners[i].summonerId][1].tier);
                  summoners[i].setFlexqDivision(body[summoners[i].summonerId][1].entries[0].division);
                } catch (TypeError) {
                  summoners[i].setFlexqTier("404");
                  summoners[i].setFlexqDivision("404");
                }

              }


            }
            if (error) {
                console.log(error);
            }

         }
    );

    while (summoners[9].SoloqTier === undefined ) {
      //console.log("hier");
      require('deasync').runLoopOnce();
    }
    return summoners;
  }



}

// var data = functions.getParticipants(47437805);
// for(i = 0; i< 10; i++){
//   console.log(data[i]);
// }


module.exports = functions;
