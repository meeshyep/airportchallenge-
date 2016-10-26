

describe('airport ',function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  it('can land a plane', function(){
    airport.land(plane)
    expect(airport.planes).toContain(plane);
  });

});



// describe('knows when a number is',function() {
//
//   it('divisible by 3', function() {
//     expect(javabuzz._isDivisibleByThree(3)).toBe(true);
//   });
