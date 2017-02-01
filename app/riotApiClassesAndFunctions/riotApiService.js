var summoner = require('./summoner.js');
var riotApi = require('./riotApi.js');

functions = {

    getRank: function(name){



        summoner = new summoner();
        summoner.setName(name);
        summoner.setFormattedName('skumbagzelle')
        array = [];
        array[0] = summoner;
        console.log("n")
        riotApi.getSummonerId(array);
        riotApi.getSummonerRank(array);
        console.log("o")
        return array;

    }




}

functions.getRank('Skumbag Zelle');
