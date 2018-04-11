const x = 1;
console.log(x);

const xx = [];
xx.push(12);
console.log(xx);


//why when to use const
//error prone example 
//var codes will likely to be overwritten to use const codes instead
//var codes = [34, 22, 11];
const codes = [34, 22, 11];

function appendCodes(users) {
    //replace with foreach
    // codes = users.map(function(user){
    users.forEach(function(user) {
        return codes.push(user.code);
    });
}

appendCodes([

    {
        code: 10

    }


]);

console.log("output is " + codes);
