var apiFunction = require('./riotApi.js');

functions = {

  getRankedInfo: function(summonerName){
      var summonerName = summonerName.toLowerCase();
      var summonerId = apiFunction.getId(summonerName);
      var summonerData = apiFunction.getData(summonerId);

      summonerData = JSON.stringify(summonerData);

      return summonerData;

  }

}



module.exports = functions;
