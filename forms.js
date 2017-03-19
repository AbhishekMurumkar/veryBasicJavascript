//index.html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title></title>
    </head>
    <body>
        <form name="theForm" id="theForm" action="">
            Red: <input type="radio" name="color" value="red" />
            Blue: <input type="radio" name="color" value="blue" />
            Green: <input type="radio" name="color" value="green" />

            <br/>
            <input type="button" id="myButton" value="Click Me!" />
        </form>
        <script src="eventUtility.js"></script>
        <script src="script.js"></script>
    </body>
</html>


//utiliy
var eventUtility = {
    addEvent : function(el, type, fn) {
        if (typeof addEventListener !== "undefined") {
            el.addEventListener(type, fn, false);
        } else if (typeof attachEvent !== "undefined") {
            el.attachEvent("on" + type, fn);
        } else {
            el["on" + type] = fn;
        }
    },
    
    removeEvent : function(el, type, fn) {
        if (typeof removeEventListener !== "undefined") {
            el.removeEventListener(type, fn, false);
        } else if (typeof detachEvent !== "undefined") {
            el.detachEvent("on" + type, fn);
        } else {
            el["on" + type] = null;
        }
    },
    
    getTarget : function(event) {
        if (typeof event.target !== "undefined") {
            return event.target;
        } else {
            return event.srcElement;
        }
    },
    
    preventDefault : function(event) {
        if (typeof event.preventDefault !== "undefined") {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    
    getCharCode : function(event) {
        if (typeof event.charCode === "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
};



//forms
(function() {

var form = document.getElementById("theForm"),
    button = form.myButton,
    textbox = form.myTextbox,
    textarea = form.myTextArea,
    select = form.dayOfWeek,
    color = form.color;

eventUtility.addEvent(form, "submit", function(evt) {
   eventUtility.preventDefault(evt);
});

eventUtility.addEvent(button, "click", function(evt) {
    var target = eventUtility.getTarget(evt);
    
    var pickedColor = "";
    
    for (var i = 0, l = color.length; i < l; i = i + 1) {
        if (color[i].checked) {
            pickedColor = color[i].value;
        }
    }
    
    alert(pickedColor);
    
    //alert("you clicked me!");

});
}());
