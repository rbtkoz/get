// # Vehicle Constructor
//
// ## Description:
//
// Create a constructor function that takes a `licensePlate` and `color` parameter, these will be properties on the instance.  You should also add `beep` and `change color` methods on the `Vehicle.prototype`. Make sure to read the test spec to see what each function actually does.
//
// # Truck Constructor
//
// ## Description:
//
// Create a Truck Constructor that is linked to the Vehicle Prototype property.

function Vehicle (licensePlate,color) {
  this.licensePlate = licensePlate;
  this.color = color;


}

Vehicle.prototype.beep = function(){
  return "BEEP, BEEP";
}

Vehicle.prototype.changeColor = function(color){
  this.color = color;
  return this.color;
}


function Truck(licensePlate, color){
  Vehicle.call(this, licensePlate, color);
  this.licensePlate = licensePlate;
  this.color = color;
  this.transmission = "Manual";

}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;
