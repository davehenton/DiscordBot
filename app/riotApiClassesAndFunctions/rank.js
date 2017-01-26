function rank() {

}

rank.prototype.setTier(tier) {
  this.tier = tier;
}
rank.prototype.setDivision(division) {
  this.division = division;
}

rank.prototype.getTier() {
  return this.tier;
}
rank.prototype.getDivision() {
  return this.division;
}

module.exports = rank;
