
var summonerObj = require('./object.summoner.js');
var riotApiService = require('./functions.apiCalls.js');

function getNamesFromMessage(messageContent,callback){
  let args = messageContent.split(" ").slice(1);
  let name = args.join();
  var summonerName = name.replace(/,/g, " ");
  var formattedName = name.replace(/,/g, "");
  formattedName= formattedName.toLowerCase();
  callback(formattedName,summonerName);
}



functions = {

    getRank: function(messageContent,sendMessage){


        var summoner = new summonerObj();

        getNamesFromMessage(messageContent,function(formattedName,summonerName){
          summoner.formattedName =formattedName;
          summoner.name = summonerName;
        })

        array = [];
        array[0] = summoner;

        riotApiService.getSummonerId(array).then(function(summoners){
          return riotApiService.getSummonerRank(summoners);
        }).then(function(array){
          var returnString = "**"+array[0].name+"**" + ": \n \t SoloQ: *"+array[0].soloQ.tier+" "+array[0].soloQ.division+"* \n \t FlexQ: *"+array[0].flexQ.tier+" "+array[0].flexQ.division+"*";
          sendMessage(returnString);
        })

    },
    getGameInfo: function(name,sendMessage){

    }


}

module.exports = functions;
