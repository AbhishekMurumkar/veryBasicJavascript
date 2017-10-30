function doProcess(a, b) {
    function displaySum() {
        alert("the sum is " + (a + b));
    }

    function displayDiff() {
        alert("the difference is " + (a - b));
    }
    displaySum();
    return displayDiff;
}

var a = doProcess(89, 88);
a();




function doProcess(a, b) {
    function displaySum() {
        alert("the sum is " + (a + b));
    }

    function displayDiff() {
        alert("the difference is " + (a - b));
    }
    function displayMult() {
        alert("Multiply " + (a * b));
    }
    displaySum();
    displayDiff();
    return displayMult;
}

var function5 = doProcess(89, 88);
function5();
