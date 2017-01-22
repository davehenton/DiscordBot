var apiFunction = require('./riotApiClassesAndFunctions/riotApiFunctions.js');
var summonerInfo = require('./riotApiClassesAndFunctions/class.summonerInfo.js');

functions = {

  getRankedInfo: function(summonerName){
      var summonerName = summonerName.toLowerCase();
      var summonerId = apiFunction.getId(summonerName);
      var summoner = new summonerInfo();
      summoner.setsummonerId(summonerId);

      var summoner = apiFunction.getData(summoner);

      var returnString = summonerName + ": SoloQ: "+summoner.SoloqTier+" "+summoner.SoloqDivision+" FlexQ: "+summoner.FlexqTier+" "+summoner.FlexqDivision;

      return returnString;

  },

  getGameInfo: function(summonerName){

      var summonerName = summonerName.toLowerCase();
      var summonerId = apiFunction.getId(summonerName);

      var participants = apiFunction.getParticipants(summonerId);


      var summoners = [];

      for (i = 0; i < 10; i++) {
        summoners[i] = new summonerInfo();
        summoners[i].setsummonerId(participants[i].summonerId);
        // console.log(participants[i].summonerId+",");
      }

      summoners = apiFunction.getGameData(summoners);
      var returnData = [];

      for(i = 0; i < 10; i++) {
        returnData[i] = participants[i].summonerName +": \n"+ "SoloQ: "+summoners[i].SoloqTier+" "+summoners[i].SoloqDivision+" FlexQ: "+summoners[i].FlexqTier+" "+summoners[i].FlexqDivision;
      }

      return returnData;
  }

}

// var data = functions.getGameInfo('lolderdomi');
// for(i = 0; i < 10; i++) {
//   console.log(data[i]);
// }


module.exports = functions;
