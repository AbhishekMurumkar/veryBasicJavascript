var Circle = function(radius) {
    this._radius = radius;
}

Circle.prototype = {
    set radius(radius) {
        this._radius = radius;
    },
    get radius(){
        return this._radius;
    },
    get area() {
      return Math.PI * (this._radius * this._radius);
    }
};

var circ = new Circle (90);
circ.radius = 15;

document.write ("A circle with a radius is " + circ.radius + " has an area of " + circ.area.toFixed(2) + "<br />");
