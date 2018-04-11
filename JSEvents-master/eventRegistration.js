//html

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<ul>
<li onclick = "alert('red')" > red </li>
<li onclick = pink() > pink </li>
<li id = "green"> green </li>
<li id = "black"> black </li>
</ul>

</body>
</html>


//js
function pink () {
alert ('pink')
}
pink();


document.getElementById('green').onclick = function () {
alert ('it is green!');
}


//pink will execute immidately 
//red has embedded js
//green has document.getElement onclick

document.getElementById('black').addEventListener('click', function() {
alert ("clicked black");
}, false);

//allows you to use multiple calls
