'use strict';
let message = ` A B C`;
let message1 = ` A 
B 
C`;
console.log(message);
console.log(message1);

'use strict';
let invoiceNum = '23';
console.log(`Invoice Number: ${"INV-" + invoiceNum}`);


'use strict';
function showMessage(message){
  let invoiceNum = '900';
  console.log(message);
}

let invoiceNum = '1232';
showMessage(`Invoice Message: ${invoiceNum}`);
//interpelation happens before function calls

'use strict';
function showMessage(message){
  console.log(message);
}

let invoiceNum = '1232';
showMessage(`Invoice Message: ${invoiceNum}`);


'use strict';

function processInvoice(segments){
  console.log(segments);
};
processInvoice `template`;



'use strict';

function processInvoice(segments, ...values){
  console.log(segments);
 console.log(values);
}

let invoiceNum = '1311';
let amount = '23212';
processInvoice `Invoice: ${invoiceNum} for ${amount}`;





