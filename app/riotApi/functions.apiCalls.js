var request = require('request');
var summonerObj = require('./object.summoner.js');

functions = {

    getSummonerId: function (summoners){
      return new Promise(function(resolve,reject){
        var arraySize = summoners.length;
        var names = [];
        //TODO url formatieren
        for(i = 0; i < arraySize; i++) {
          names[i] = summoners[i].formattedName;
        }
        names.join();

        request.get(
            'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+names+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
            { json: { key: 'value' } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {

                  for(k = 0; k < arraySize; k++){
                    for(i = 0; i < Object.keys(body).length; i++) {

                      if(summoners[k].name == body[summoners[k].formattedName].name) {

                        summoners[k].id = body[summoners[k].formattedName].id;
                        summoners[k].name = body[summoners[k].formattedName].name;

                      }
                    }
                  }

                  resolve(summoners);
                }
                if (error) {
                  console.log(error);
                  reject(error);
                }

             }
        );

      })
    },

    getSummonerRank: function (summoners){
      return new Promise(function(resolve,reject){
        var arraySize = summoners.length;

        var ids = [];
        for(i = 0; i < arraySize; i++) {
          ids[i] = summoners[i].id;
        }
        ids.join();


        request.get(
            'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/'+ids+'/entry?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
            { json: { key: 'value' } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {


                  for(k = 0; k < arraySize; k++){
                    for(i = 0; i < Object.keys(body[summoners[k].id]).length; i++) {

                      if(body[summoners[k].id][i].queue == "RANKED_SOLO_5x5"){

                        summoners[k].soloQ.tier = body[summoners[k].id][i].tier;
                        summoners[k].soloQ.division = body[summoners[k].id][i].entries[0].division;

                      }
                      if(body[summoners[k].id][i].queue == "RANKED_FLEX_SR"){

                        summoners[k].flexQ.tier = body[summoners[k].id][i].tier;
                        summoners[k].flexQ.division = body[summoners[k].id][i].entries[0].division;
                      }
                      if(body[summoners[k].id][i].queue == "RANKED_TEAM_3x3"){
                        //TODO Summoner um 3er Q erweitern
                        // dreierQ = new rank();
                        // dreierQ.setTier(body[summoners[k].getId()][i].tier);
                        // dreierQ.setDivision(body[summoners[k].getId()][i].entries[0].division)
                        // console.log(dreierQ);

                      }
                    }
                  }
                resolve(summoners);

                }
                if (error) {
                  console.log(error);
                  reject(error);
                }

             }
        );


      })
    },
    getParticipants: function (summonerId){
      return new Promise(function(resolve,reject){

        var array = [];

        for(i = 0; i < 10; i++){
          array[i] = new summonerObj();
        }

        request.get(
            'https://euw.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/EUW1/'+summonerId+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
            { json: { key: 'value' } },
            function (error, response, body) {
                if (!error && response.statusCode == 200) {

                  for(i = 0; i < 10; i++){
                    array[i].name = body.participants[i].summonerName;
                    array[i].id = body.participants[i].summonerId
                  }
                  resolve(array);
                }
                if (error) {
                    console.log(error);
                    reject(error);
                }

             }
        );

      })
    },


    getChampionName: function(id){

      var name;

      request.get(
          'https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion/'+id+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
          { json: { key: 'value' } },
          function (error, response, body) {
              if (!error && response.statusCode == 200) {

                name = body.name;

              }
              if (error) {
                console.log(error);
              }

           }
      );

      return name;
    }

}

module.exports = functions;