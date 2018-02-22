//callbacks

/*
You feel ill so you go to the doctor. He examines you and determines you need some medication. He prescribes some meds and calls the prescription into your local pharmacy. You go home. Later your pharmacy calls to tell you your prescription is ready. You go and pick it up
*/

var list = [1, 4, 5, 6, 9];

function callback(list) {

    var newList = [];
    for (var i = 0; i < list.length; i++) {
        if (list[i] > 5)
            newList.push(list[i]);
    }
    return newList;
}

function filter(list, callback) {
    return callback(list);
}

var filtered = filter(list, callback);
console.log(filtered)
