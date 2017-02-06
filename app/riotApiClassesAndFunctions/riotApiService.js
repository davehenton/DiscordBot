var summoner = require('./summoner.js');
var riotApi = require('./riotApi.js');

var obj = require('../riotApi/object.summoner.js');



functions = {

    getRank: function(name,sendMessage){



        //summoner = new summoner();
        var summoner = new obj();
        //summoner.setName('Skumbag Zelle');
        summoner.name = 'Skumbag Zelle';
        //summoner.setFormattedName('skumbagzelle');
        summoner.formattedName = 'skumbagzelle'
        array = [];
        array[0] = summoner;


        riotApi.getSummonerId(array,function(summoners){

          riotApi.getSummonerRank(summoners,function(array){

            var returnString = array[0].name + ": SoloQ: "+array[0].soloQ.tier+" "+array[0].soloQ.division+" FlexQ: "+array[0].flexQ.tier+" "+array[0].flexQ.division;
            sendMessage(returnString);
          });
        });
    }


}

module.exports = functions;
