
Array.prototype.inArray = function inArray (value) {
  for (i = 0; i<this.length; i++) {
    if(this[i] === value) {
    return true;
  }
}
return false;
}

var sampArray = [1,2,3,4,5];
document.write("3 in array " + sampArray.inArray(3) + "<br />");
