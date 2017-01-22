// Constructor
function summonerInfo(summonerId,SoloqTier,SoloqDivision, FlexqTier, FlexqDivision) {
  // always initialize all instance properties
  this.summonerId = summonerId;
  this.SoloqTier = SoloqTier;
  this.SoloqDivision = SoloqDivision;
  this.FlexqTier = FlexqTier;
  this.FlexqDivision = FlexqDivision;

}

// class methods
summonerInfo.prototype.setsummonerId = function(summonerId) {
this.summonerId = summonerId;
};
summonerInfo.prototype.setSoloqDivision = function(SoloqDivision) {
this.SoloqDivision = SoloqDivision;
};
summonerInfo.prototype.setSoloqTier = function(SoloqTier) {
this.SoloqTier = SoloqTier;
};
summonerInfo.prototype.setFlexqDivision = function(FlexqDivision) {
this.FlexqDivision = FlexqDivision;
};
summonerInfo.prototype.setFlexqTier = function(FlexqTier) {
this.FlexqTier = FlexqTier;
};


// export the class
module.exports = summonerInfo;
