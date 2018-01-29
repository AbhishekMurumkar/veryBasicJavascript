

//get and setters
function Coordinates(){
  this.latitude = 0;
  this.longtitude = 0;
}
//getter
Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function(){
  return "Latitude: " + this.latitude  + " Longtitude: " + this.longtitude; 
});

//setter
Object.__defineSetter__.call(Coordinates.prototype,"setCoords", function(coords){
  var parts = coords.toString().split(" , ");
  this.latitude = parts [0] || "";
  this.longtitude = parts [1] || "";
});

var testCoords = new Coordinates();
testCoords.setCoords = "37.8, 118.8";

document.write("Coordinates : " + testCoords.getCoords + "</br />");
