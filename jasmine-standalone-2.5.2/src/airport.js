function Airport() {
  this.planes = [];
  this.weather = new Weather();
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);

};

Airport.prototype.takeoff = function(plane) {
  if(this.weather.isStormy()){throw new Error("Can't take off: stormy")};
  var index = this.planes.indexOf(plane);
  if (index > -1) {
    this.planes.splice(index, 1)
  };
};

function Plane() {

};



function Weather() {
  this.isStormy = function() {
    if(Math.random() > 0.9){
      return true;
    };
  };
};



// Weather.prototype.isStormy = function () {
//   return false;
// };
//
//
// this.changeName = function (name) {
//         this.lastName = name;
//     };
