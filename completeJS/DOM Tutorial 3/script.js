var example = document.getElementById('example');

var listItems = document.getElementsByTagName('li');
for(var x=0; x<listItems.length; x++){
    listItems[x].innerHTML="item" + x;
}

listItems[2].innerText = "Updated";