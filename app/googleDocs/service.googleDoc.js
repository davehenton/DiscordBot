
var summonerObj = require('../riotApi/object.summoner.js');
var riotApiService = require('../riotApi/functions.apiCalls.js');
var fileService = require('./writeToFile.js');


function getNamesFromMessage(messageContent,callback){
  let args = messageContent.split(" ").slice(1);
  let name = args.join();
  var summonerName = name.replace(/,/g, " ");
  var formattedName = name.replace(/,/g, "");
  formattedName= formattedName.toLowerCase();
  callback(formattedName,summonerName);
}

functions = {

    writeDataToFile: function(messageContent,callback){

      var summoner = new summonerObj();

      getNamesFromMessage(messageContent,function(formattedName,summonerName){
        summoner.formattedName =formattedName;
        summoner.name = summonerName;
      })


      array = [];
      array[0] = summoner;

      riotApiService.getSummonerId(array).then(function(summoners){
        return riotApiService.getRecentGameData(summoners[0].id);
      }).then(function(gameData){
        return riotApiService.getAdditionalGameData(gameData)
      }).then(function(gameData){
        var dataString = "**Win: **" + gameData.win + "\n"+
        "**TimePlayed: **" + gameData.timePlayed + "\n"+
        "**CS: **" + gameData.minionsKilled + "\n"+
        "**Gold: **" + gameData.goldEarned + "\n"+
        "**DMG: **" + gameData.totalDamageDealtToChampions + "\n"+
        "**TeamDmg: **" + gameData.teamDmg + "\n"+
        "**WardsPlaced: **" + gameData.wardPlaced + "\n"+
        "**Kills: **" + gameData.championsKilled + "\n"+
        "**Deaths: **" + gameData.numDeaths + "\n"+
        "**Assists: **" + gameData.assists + "\n"+
        "**Side: **" + gameData.team + "\n"+
        "**TeamKills: **" + gameData.teamKills + "\n"+
        "**WardsKilled: **" + gameData.wardKilled + "\n";
        //TODO daten formatieren und speichern danach in GoogleDocs schreiben und temp datei löschen
        //fileService.writeToFile('D:/NodeProjects/Discord-Bot/tmp/test',dataString);
        callback(dataString);
      })


    },

}

module.exports = functions;
