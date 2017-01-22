// Constructor
function participant(summonerName, summonerId) {
  // always initialize all instance properties
  this.summonerName = summonerName;
  this.summonerId = summonerId;

}

// class methods
participant.prototype.setName = function(summonerName) {
this.summonerName = summonerName;
};
participant.prototype.setId = function(summonerId) {
this.summonerId = summonerId;
};

// export the class
module.exports = participant;
