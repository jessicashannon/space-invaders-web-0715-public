function Spaceship(name, crewarray, num1, num2){
  this.name = name;
  this.phasers = num1;
  this.crew = crewarray
  this.shields = num2;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  if(this.crew.length > 0){
    this.docked = false;
    }
  else{
    this.docked = true;
    }
  this.phasersCharge = 'uncharged';
  this.shipStatus();
};

Spaceship.prototype.shipStatus = function(){
  // var that = this;
  this.crew.forEach(function(crewmember){
    crewmember.currentShip = this;
  }.bind(this));
};
