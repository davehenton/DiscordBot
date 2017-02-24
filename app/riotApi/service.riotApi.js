
var summonerObj = require('./object.summoner.js');
var riotApiService = require('./functions.apiCalls.js');





functions = {

    getNamesFromMessage: function(messageContent,callback){
      let args = messageContent.split(" ").slice(1);
      let name = args.join();
      var summonerName = name.replace(/,/g, " ");
      var formattedName = name.replace(/,/g, "");
      formattedName= formattedName.toLowerCase();
      callback(formattedName,summonerName);
    },

    getRank: function(messageContent,sendMessage){

        var summoner = new summonerObj();

        functions.getNamesFromMessage(messageContent,function(formattedName,summonerName){
          summoner.formattedName =formattedName;
          summoner.name = summonerName;
        })

        array = [];
        array[0] = summoner;

        riotApiService.getSummonerId(array).then(function(summoners){
          return riotApiService.getSummonerRank(summoners);
        }).then(function(array){
          var string = "**"+array[0].name+"**" + ": \n \t SoloQ: *"+array[0].soloQ.tier+" "+array[0].soloQ.division+"* \n \t FlexQ: *"+array[0].flexQ.tier+" "+array[0].flexQ.division+"*";
          sendMessage(string);
        })

    },
    getGameInfo: function(messageContent,sendMessage){

      var summoner = new summonerObj();

      functions.getNamesFromMessage(messageContent,function(formattedName,summonerName){
        summoner.formattedName =formattedName;
        summoner.name = summonerName;
      })

      array = [];
      array[0] = summoner;

      riotApiService.getSummonerId(array)
      .then(function(array){
        return riotApiService.getParticipants(array[0].id);
      }).then(function(participants){

        return riotApiService.getSummonerRank(participants);
      }).then(function(array){

        for(i = 0; i < 10; i++){
          var string = "**"+array[i].name+"**" + ": \n \t SoloQ: *"+array[i].soloQ.tier+" "+array[i].soloQ.division+"* \n \t FlexQ: *"+array[i].flexQ.tier+" "+array[i].flexQ.division+"*";
          sendMessage(string);
        }
      })
    }


}

module.exports = functions;
