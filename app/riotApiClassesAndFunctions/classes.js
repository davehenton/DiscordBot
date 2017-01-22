// Constructor
function rankedInfo(SoloqDivision, SoloqTier, FlexqDivision, FlexqTier) {
  // always initialize all instance properties
  this.SoloqTier = SoloqTier;
  this.SoloqDivision = SoloqDivision;
  this.FlexqTier = FlexqTier;
  this.FlexqDivision = FlexqDivision;

}
// class methods
rankedInfo.prototype.setSoloqDivision = function(SoloqDivision) {

this.SoloqDivision = SoloqDivision;
};
rankedInfo.prototype.setSoloqTier = function(SoloqTier) {

this.SoloqTier = SoloqTier;
};
rankedInfo.prototype.setFlexqDivision = function(FlexqDivision) {

this.FlexqDivision = FlexqDivision;
};
rankedInfo.prototype.setFlexqTier = function(FlexqTier) {

this.FlexqTier = FlexqTier;
};

// export the class
module.exports = rankedInfo;
