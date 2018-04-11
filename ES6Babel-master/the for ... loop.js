for (let letter of 'Javascript'){
console.log(letter);
}

var topics = ['javascript', 'node', 'react'];

for (let topic of topics) {
console.log(topic);
}

var topics = new Map();
topics.set('HTML', '/class/html');
topics.set('JAVA', '/class/java');
topics.set('JS', '/class/js');
topics.set('Babel', '/class/babeel');

for(let topic of topics){
console.log(topic)
};

for(let topic of topics.keys()){
console.log(`Looping through the keys ${topic}`);
};

for(let topic of topics.values()){
console.log(`Looping through the values ${topic}`);
};

for(let topic of topics.entries()){
console.log(`entries ${topic}`);
};
