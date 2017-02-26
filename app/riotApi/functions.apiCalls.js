var https = require('https');
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

        https.get('https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+names+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',(response) => {
                response.setEncoding('utf8');
                response.on('data', (body) => {
                try {
                  body = JSON.parse(body);
                  for(k = 0; k < arraySize; k++){
                    for(i = 0; i < Object.keys(body).length; i++) {

                      if(summoners[k].name == body[summoners[k].formattedName].name) {

                        summoners[k].id = body[summoners[k].formattedName].id;
                        summoners[k].name = body[summoners[k].formattedName].name;

                      }
                    }
                  }

                  resolve(summoners);
                } catch(e) {
                  console.log(e);
                  reject(e);
                }
                })
                response.on('error', (e) => {
                  reject(e)
                })

             });
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


        https.get('https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/'+ids+'/entry?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',(response) => {
                response.setEncoding('utf8');
                response.on('data', (body) => {
                try {
                  body = JSON.parse(body);
                    for (k = 0; k < arraySize; k++){

                      if(Object.keys(body).indexOf(summoners[k].id.toString()) != -1){

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
                    }
                     resolve(summoners);
                } catch (e) {
                  console.log(e);
                  reject(e);
                }

                })
                response.on('error', (e) => {
                  reject(e)
                })

             });
      })
    },
    getParticipants: function (summonerId){
      return new Promise(function(resolve,reject){

        var array = [];

        for(i = 0; i < 10; i++){
          array[i] = new summonerObj();
        }

        https.get('https://euw.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/EUW1/'+summonerId+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',(response) => {
                response.setEncoding('utf8');
                response.on('data', (body) => {
                try {
                  body = JSON.parse(body);
                    for(i = 0; i < 10; i++){
                      array[i].name = body.participants[i].summonerName;
                      array[i].id = body.participants[i].summonerId
                    }
                    resolve(array);
                } catch (e) {
                  console.log(e)
                  reject(e)
                }

                });
                response.on('error', (e) => {
                  reject(e)
                })

             });

      })
    },

    getChampionName: function(id){


    },

    getRecentGameData: function(summonerId){

      return new Promise(function(resolve,reject){

        https.get('https://euw.api.pvp.net/api/lol/euw/v1.3/game/by-summoner/'+summonerId+'/recent?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',(response) => {
                response.setEncoding('utf8');

                response.on('data', (body) => {
                  var gameData = {};
                  try {
                    JSON.parse(body);

                    gameData.gameId = body.games[0].gameId;
                    gameData.gameType = body.games[0].subType;
                    gameData.championId = body.games[0].championId;

                    gameData.goldEarned = body.games[0].stats.goldEarned;
                    gameData.numDeaths = body.games[0].stats.numDeaths;
                    gameData.minionsKilled = body.games[0].stats.minionsKilled;
                    gameData.championsKilled = body.games[0].stats.championsKilled;
                    gameData.assists = body.games[0].stats.assists;
                    gameData.totalDamageDealtToChampions = body.games[0].stats.totalDamageDealtToChampions;
                    gameData.team = body.games[0].stats.team;
                    gameData.win = body.games[0].stats.win;
                    gameData.timePlayed = body.games[0].stats.timePlayed;
                    gameData.wardKilled = body.games[0].stats.wardKilled;
                    gameData.wardPlaced = body.games[0].stats.wardPlaced;

                  resolve(gameData);
                } catch (e) {
                  console.log(e)
                  reject(gameData)
                }

                })
                response.on('error', (e) => {
                  reject(e)
                })


             });
      })
    },

    getAdditionalGameData : function(gameData){

      return new Promise(function(resolve,reject){

        https.get('https://euw.api.pvp.net/api/lol/euw/v2.2/match/'+gameData.gameId+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15', (response) => {
                response.setEncoding('utf8');
                response.on('data', (body) => {
                body = JSON.parse(body);
                    gameData.teamKills = 0;
                    gameData.teamDmg = 0;


                    for(var i = 0; i< 10; i++){
                      if(body.participants[i].teamId == gameData.team){
                        gameData.teamKills += body.participants[i].stats.kills;
                        gameData.teamDmg += body.participants[i].stats.totalDamageDealtToChampions;
                      }

                    }

                  resolve(gameData);
                })
                response.on('error', (e) => {
                  reject(e)
                })

             });

      })
   }
}

module.exports = functions;
