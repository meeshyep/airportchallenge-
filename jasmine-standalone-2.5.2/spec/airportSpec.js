

describe('airport ',function(){

  var airport;
  var plane;
  // var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    // weather = new Weather();
    // weather = false
  });

  it('can land a plane', function(){
    airport.land(plane)
    expect(airport.planes).toContain(plane);
  });

  it('can instruct a plane to take off', function(){
    spyOn(airport.weather, 'isStormy').and.returnValue(false);
    airport.land(plane)
    airport.takeoff(plane)
    expect(airport.planes).toEqual([]);
  });

  it('prevents takeoff when weather is stormy', function() {
    spyOn(airport.weather, 'isStormy').and.returnValue(true);
    airport.land(plane)
    expect(function(){
      airport.takeoff(plane)
    }).toThrowError("Can't take off: stormy");
  });

});
