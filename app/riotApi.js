var request = require('request');

var summonerName = 'skumbagzelle';


var summonerId = getId(summonerName,callbackId);
var summonerDiv= getDivision(summonerId,callbackDiv);




//Call der mir daten liefert
function getDivision (summonerId, callback){
  request.get(
      'https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/48918098/entry?api_key=RGAPI-b74a4bbe-b4bc-47d3-9943-4d8c8b3bcf15',
      { json: { key: 'value' } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              s = summonerId;
              console.log(body.name);
              summonerDiv = body;

          }
          if (error) {
              summonerDiv = error;
          }
         callbackDiv(summonerDiv);

       }
  );
}
//daten werden in der process methode verarbeitet
function callbackDiv(summonerDiv){
  console.log(summonerDiv);
  return summonerDiv;
}





//Call der mir daten liefert
function getId (summonerName, callback){
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
         callbackId(summonerId);

       }
  );
}
//daten werden in der process methode verarbeitet
function callbackId(summonerId){
  console.log(summonerId);
  return summonerId;
}
