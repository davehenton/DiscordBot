var request = require('request');
var summoner = require('./summoner');
var rank = require('./rank');

functions = {

    getSummonerId: function (summoners){
      var arraySize = summoners.lenght;

      for(i = 0; i <= arraySize; i++) {
        var names += summoners[i].getFormattedName() + ",";
      }

      request.get(
          'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+names+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
          { json: { key: 'value' } },
          function (error, response, body) {
              if (!error && response.statusCode == 200) {

                for(k = 0; k <= arraySize; k++){
                  for(i = 0; i <= body.length; i++) {
                    if(summoners[k].getFormattedName() == body[i] ) {
                      summoners[i].setId(body[i].id);
                      summoners[i].setName(body[i].name);
                    }
                  }
                }

              }
              if (error) {
                console.log(error);
              }

           }
      );

      return summoners;

    }

}
