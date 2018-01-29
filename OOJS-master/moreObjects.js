//json oojs

var rectangle = {
  length: 8.0,
  width: 5.0,
  color: 'Red'
};
console.log(rectangle.length);


//constructor function

function Rectangle (length, width, color)
{
  this.length=length;
  this.width=width;
  this.color=color;
  
}

var Rectangle1 = new Rectangle (4.2, 9.6, "White");
console.log(Rectangle1.color);

var Rectangle2 = new Rectangle (24.6, 29.6, "orange");
console.log(Rectangle2.width);
