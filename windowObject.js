function Friend (name) {
  this.name = name;
}
alert(this);
//object window
//browser window


function Enemy (name) {
  this.name = name;
  alert("Enemy is " + this);
}
Enemy();
