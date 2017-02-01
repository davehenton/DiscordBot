function rank() {

}

rank.prototype.setTier = function(tier) {
  this.tier = tier;
};
rank.prototype.setDivision = function(division) {
  this.division = division;
};

rank.prototype.getTier = function() {
  return this.tier;
};
rank.prototype.getDivision = function() {
  return this.division;
};

module.exports = rank;
