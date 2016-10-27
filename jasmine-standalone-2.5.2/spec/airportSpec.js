describe('airport ',function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('Allow default capacity to be changed as required', function() {
    airport.capacity = 5;
    expect(airport.capacity).toEqual(5);
  });

  describe('When it is not stormy', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(false);
    });

    it('Prevent landing when the airport is full', function() {
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      expect(function() {
        airport.land(plane); }).toThrowError("Unable to land, airport full");
    });

    it('Can land a plane', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

    it('Can instruct a plane to take off', function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).toEqual([]);
    });
  });

  describe('When it is stormy', function() {
    beforeEach(function() {
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
    });

    it('Prevents takeoff when weather is stormy', function() {
      expect(function() {
        airport.takeoff(plane);
      }).toThrowError("Can't take off: stormy");
    });

    it('Prevents landing when the weather is stormy', function() {
      expect(function() {
        airport.land(plane);
      }).toThrowError("Can't land plane: stormy");
    });
  });
});
