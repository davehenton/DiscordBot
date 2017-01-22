var apiFunction = require('./riotApiClassesAndFunctions/riotApiFunctions.js');

functions = {

  getRankedInfo: function(summonerName){
      var summonerName = summonerName.toLowerCase();
      var summonerId = apiFunction.getId(summonerName);
      var summonerData = apiFunction.getData(summonerId);

      var returnString = summonerName + ": SoloQ: "+summonerData.SoloqTier+" "+summonerData.SoloqDivision+" FlexQ: "+summonerData.FlexqTier+" "+summonerData.FlexqDivision;

      return returnString;

  }

}

// var data = functions.getRankedInfo('SkumbagZelle');
// console.log(data);

module.exports = functions;
