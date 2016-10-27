

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

  it('Can land a plane', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it('Can instruct a plane to take off', function(){
    spyOn(airport.weather, 'isStormy').and.returnValue(false);
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes).toEqual([]);
  });

  it('Prevents takeoff when weather is stormy', function() {
    spyOn(airport.weather, 'isStormy').and.returnValue(true);
    airport.land(plane);
    expect(function(){
      airport.takeoff(plane);
    }).toThrowError("Can't take off: stormy");
  });

  it('Prevent landing when the airport is full', function(){
    airport.land(plane);
    airport.land(plane);
    airport.land(plane);
    expect(function(){
      airport.land(plane);
    }).toThrowError("Unable to land, airport full");
  });

  it('Allow default capacity to be changed as required', function(){
    airport.capacity = 5;
    expect(airport.capacity).toEqual(5);
  });


});
