function Airport() {
  this.planes = [];
  this.weather = new Weather();
  this.capacity = 3;
}

Airport.prototype.land = function(plane) {
  if(this.weather.isStormy()){throw new Error("Can't land plane: stormy");
}
  if(this.planes.length >= this.capacity){
    throw new Error("Unable to land, airport full");
  }
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  if(this.weather.isStormy()){throw new Error("Can't take off: stormy");}
  var index = this.planes.indexOf(plane);
  if (index > -1) {
    this.planes.splice(index, 1);
  }
};

function Plane() {

}

function Weather() {
  this.isStormy = function() {
    if(Math.random() > 0.9){
      return true;
    }
  };
}
