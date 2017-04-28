//without jslint
alert("Hello");

function lameJoke() {
    var randomNumber = Math.round(Math.random() * 2);
    if (randomNumber === 1) {
      alert("Why did a chicken cross the road? The light was green!");
    } else if (randomNumber === 2) {
      alert("Did a scarecrow win an award? Yes?");
    } else {
      alert("Where have you been? In a mad house");
    }

}

lameJoke();


//with jslint
"use strict";
window.alert("Hello");

function lameJoke() {
    var randomNumber = Math.round(Math.random() * 2);
    if (randomNumber === 1) {
        window.alert("Why did a chicken cross the road? The light was green!");
    } else if (randomNumber === 2) {
        window.alert("Did a scarecrow win an award? Yes?");
    } else {
        window.alert("Where have you been? In a mad house");
    }

}

lameJoke();
