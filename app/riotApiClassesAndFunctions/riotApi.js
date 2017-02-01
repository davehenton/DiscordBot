var request = require('request');
var summoner = require('./summoner');
var rank = require('./rank');

functions = {

    getSummonerId: function (summoners){
      var arraySize = summoners.lenght;
      var names = [];
      //TODO url formatieren
      for(i = 0; i <= arraySize; i++) {
        names[i] = summoners[i].getName();
      }
      names.join();

      request.get(
          'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+names+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
          { json: { key: 'value' } },
          function (error, response, body) {
              if (!error && response.statusCode == 200) {
                console.log("hier")
                for(k = 0; k < arraySize; k++){
                  for(i = 0; i < Object.keys(body).length; i++) {

                    if(summoners[k].getName() == body[summoners[k].getFormattedName()].name ) {
                      summoners[k].setId(body[summoners[k].getFormattedName()].id);
                      summoners[k].setName(body[summoners[k].getFormattedName()].name);
                      console.log(summoner[0]);
                    }
                  }
                }

              }
              if (error) {
                console.log(error);
              }

           }
      );

      return summoners;

    },

    getSummonerRank: function (summoners){

      var arraySize = summoners.length;

      var ids = [];
      for(i = 0; i < arraySize; i++) {
        ids[i] = summoners[i].getId();
      }
      ids.join();

      request.get(
          'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/'+ids+'/entry?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
          { json: { key: 'value' } },
          function (error, response, body) {
              if (!error && response.statusCode == 200) {


                for(k = 0; k < arraySize; k++){
                  for(i = 0; i < Object.keys(body[summoners[k].getId()]).length; i++) {

                    if(body[summoners[k].getId()][i].queue == "RANKED_SOLO_5x5"){
                      soloQ = new rank();
                      soloQ.setTier(body[summoners[k].getId()][i].tier);
                      soloQ.setDivision(body[summoners[k].getId()][i].entries[0].division)
                      console.log(soloQ);
                      summoners[k].setSoloQ(soloQ);

                    }
                    if(body[summoners[k].getId()][i].queue == "RANKED_FLEX_SR"){
                      flexQ = new rank();
                      flexQ.setTier(body[summoners[k].getId()][i].tier);
                      flexQ.setDivision(body[summoners[k].getId()][i].entries[0].division)
                      //console.log(flexQ);
                      summoners[k].setFlexQ(flexQ);
                    }
                    if(body[summoners[k].getId()][i].queue == "RANKED_TEAM_3x3"){
                      //TODO Summoner um 3er Q erweitern
                      // dreierQ = new rank();
                      // dreierQ.setTier(body[summoners[k].getId()][i].tier);
                      // dreierQ.setDivision(body[summoners[k].getId()][i].entries[0].division)
                      // console.log(dreierQ);

                    }
                  }
                }
                console.log("hier");
                console.log(summoners[0]);

              }
              if (error) {
                console.log(error);
              }

           }
      );

      return summoners;

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
