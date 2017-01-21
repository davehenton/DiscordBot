var request = require('request');

functions = {

//Call der mir SummonerId liefert
  getId: function (summonerName){
    var summonerId = 0;
    request.get(
        'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+summonerName+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var s = summonerName;
                summonerId = body[s].id;

            }
            if (error) {
              console.log(error);
            }

         }
    );
    while (summonerId == 0) {
      require('deasync').runLoopOnce();
    }
    return summonerId;
  },

  //Call der mir daten liefert
  getData: function (summonerId){
    var summonerData;
    request.get(
        'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/'+summonerId+'/entry?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
        { json: { key: 'value' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                summonerData = body;

            }
            if (error) {
                console.log(error);
            }

         }
    );

    while (summonerData === undefined) {
      require('deasync').runLoopOnce();
    }
    return summonerData;
  }


}


module.exports = functions;
