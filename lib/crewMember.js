function CrewMember(position){
  this.position = position;
  this.currentShip = 'Looking for a Rig';
  };


CrewMember.prototype.engageWarpDrive = function engageWarpDrive(){
  if(this.position === "Pilot" && this.currentShip !== 'Looking for a Rig'){
    this.currentShip.warpDrive = 'engaged!';
  }
  else{
    return 'had no effect';
  }
};

CrewMember.prototype.setsInvisibility = function setsInvisibility(){
  if(this.position === "Defender" && this.currentShip !== 'Looking for a Rig'){
    this.currentShip.cloaked = true;
  }
  else{
    return 'had no effect';
  }
};

CrewMember.prototype.chargePhasers = function chargePhasers(){
    if(this.position === "Gunner" && this.currentShip !== 'Looking for a Rig'){
      this.currentShip.phasersCharge = 'charged!';
    }
    else{
      return 'had no effect';
    }
  };
