var request = require('request');

var summonerName = 'skumbagzelle';





makeCall(process);
console.log("Instant");

//Call der mir daten liefert
function makeCall (callback){
  request.get(
      'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+summonerName+'?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
      { json: { key: 'value' } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              var s = summonerName;
              summonerId = body[s].id;

          }
          if (error) {
              summonerId = error;
          }
          callback(summonerId);
      }
  );
}

//daten werden in der process methode verarbeitet
function process(summonerId){
  console.log(summonerId);
}
