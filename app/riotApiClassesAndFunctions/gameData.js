function gameData () {

}

//Setter Methods

gameData.prototype.setChampionId = function(id){
  this.championId = id;
}
gameData.prototype.setResult = function(result){
  this.result = result;
}
gameData.prototype.setResult = function(result){
  this.result = result;
}
gameData.prototype.setLength = function(length){
  this.length = length;
}
gameData.prototype.setSide = function(side){
  this.side = side;
}
gameData.prototype.setCS = function(cs){
  this.cs = cs;
}
gameData.prototype.setGold = function(gold){
  this.gold = gold;
}
gameData.prototype.setDmg = function(dmg){
  this.dmg = dmg;
}
gameData.prototype.setWardsPlaced = function(wardsPlaced){
  this.wardsPlaced = wardsPlaced;
}
gameData.prototype.setKills = function(kills){
  this.kills = kills;
}
gameData.prototype.setDeaths = function(deaths){
  this.deaths = deaths;
}
gameData.prototype.setAssists = function(assists){
  this.assists = assists;
}
gameData.prototype.setWardsKilled = function(wardsKilled){
  this.wardsKilled = wardsKilled;
}

//Getter Methods

gameData.prototype.getChampionId = function(){
  return this.championId;
}
gameData.prototype.getResult = function(){
  return this.result;
}
gameData.prototype.getResult = function(){
  return this.result;
}
gameData.prototype.getLength = function(){
  return this.length;
}
gameData.prototype.getSide = function(){
  return this.side ;
}
gameData.prototype.getCS = function(){
  return this.cs ;
}
gameData.prototype.getGold = function(){
  return this.gold;
}
gameData.prototype.getDmg = function(){
  return this.dmg;
}
gameData.prototype.getWardsPlaced = function(){
  return this.wardsPlaced;
}
gameData.prototype.getKills = function(){
  return this.kills;
}
gameData.prototype.getDeaths = function(){
  return this.deaths;
}
gameData.prototype.getAssists = function(){
  return this.assists;
}
gameData.prototype.getWardsKilled = function(){
  return this.wardsKilled;
}

module.exports = gameData;
