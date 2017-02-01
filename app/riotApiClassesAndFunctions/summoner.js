function summoner () {

}

summoner.prototype.setId = function(id) {
  this.id = id;
};
summoner.prototype.setName = function(name) {
  this.name = name;
};
summoner.prototype.setFormattedName = function(name) {
  this.formattedName = name;
};

summoner.prototype.setSoloQ = function(rank) {
  this.soloQ = rank;
};
summoner.prototype.setFlexQ = function(rank) {
  this.FlexQ = rank;
};

summoner.prototype.getId = function() {
  return this.id;
};
summoner.prototype.getName = function() {
  return this.name;
};
summoner.prototype.getFormattedName = function() {
  return this.formattedName;
};

summoner.prototype.getSoloQ = function() {
  return this.soloQ;
};
summoner.prototype.getFlexQ = function() {
  return this.FlexQ;
};

module.exports = summoner;
