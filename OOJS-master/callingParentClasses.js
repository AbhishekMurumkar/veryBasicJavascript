function Vehicle(name){
  this.name = "HONDA";
}

Vehicle.prototype = {
  drive: function() {
    return this.name + " drives forward";
  },
  
  stop: function() {
    return this.name + " stops";
  }
}

function Truck(name) {
  this.name = name;
}

Truck.prototype = new Vehicle();
Truck.prototype.constructor = Truck;

Truck.prototype.drive = function(){
  var driveMsg = Vehicle.prototype.drive.apply(this);
  
  return driveMsg += " through a field";
}

var mb = new Truck("Mercedes Benz ");

document.write(mb.drive() + "<br />");
document.write(mb.stop() + "<br />");
