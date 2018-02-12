var temperatures = {},
    length = 0,
    total  = 0;

temperatures["monday"] = 25;
temperatures["tuesday"] = 25;
temperatures["wednesday"] = 22;
temperatures["thursday"] = 22;
temperatures["friday"] = 11;
temperatures["saturday"] = 77;
temperatures["sunday"] = 88;

for (var day in temperatures) {
    total += temperatures[day];
    length++;
}

var average = total / length;
console.log(Math.round(average));
