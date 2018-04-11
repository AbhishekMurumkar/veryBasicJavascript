const map = new Map ([
  ['movie', "three musketters"],
  ['year', 1934],
  ['actors', {
    'actor1': "Ted Benson",
    'actor2': "Lucy Kay"
  }]
]);

map;
=> Map {
  'movie' => 'three musketters',
  'year' => 1934,
  'actors' => { actor1: 'Ted Benson', actor2: 'Lucy Kay' } }
  
 //
 
 
 
 const map = new Map ([
  ['movie', "three musketters"],
  ['year', 1934],
  ['actors', {
    'actor1': "Ted Benson",
    'actor2': "Lucy Kay"
  }]
]);

const entries = map.entries();
for (let [key, value] of entries) {
  key
}
map;
=> Map {
  'movie' => 'three musketters',
  'year' => 1934,
  'actors' => { actor1: 'Ted Benson', actor2: 'Lucy Kay' } }
   
   
const map = new Map ([
  ['movie', "three musketters"],
  ['year', 1934],
  ['actors', {
    'actor1': "Ted Benson",
    'actor2': "Lucy Kay"
  }]
]);

//console.log(map.get('movie'));
console.log(...map.keys());
//movie year actors



   
