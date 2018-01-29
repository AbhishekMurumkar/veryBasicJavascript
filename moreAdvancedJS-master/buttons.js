//<button class = "btn"> button 1 </button>
//older browsers
(function() {
        var btns = document.querySelectorAll('.btn');

        function makeAlertNumFunction(num) {
            return function() {
                alert(num);
            };
        }


        for (var i = 0; i < btns.length; i++) {
            var btn = btns[i];
            btn.addEventListener('click', makeAlertNumFunction(i)));
    }

})();




//new browser ie9
(function() {
    var btns = document.querySelectorAll('.btn');

    function alertNum(num) {
        alert(num);
    }
    for (var i = 0; i < btns.length; i++) {
        var btn = btns[i];
        btn.addEventListener('click', alertNum.bind(this, i));
    }

})();
