
// position 0 hair color
// var person = ['brown', 'blue', 5.6, 150]

var person = {
  'hair-color': 'brown',
  "eyes": 'blue',
  height: 5.6,
  weight: 150,
  key: 'this is key',
  pets: [
    { 
    petName: 'sparky',
    type: 'dog'
    },
    {
      petName: 'sparky2',
      type: 'dog'
    },
    {
      petName: 'sparky3',
      type: 'dog'
     }
  ],

};

person.iq = 7;

var myVar = 'iq';

console.log(person[myVar]);

// console.log(person.hair-color);

for (var key in person) {
  var value = person[key];
  console.log('key is ', key, value);


  if (Array.isArray(value)) {
    for (var index = 0; index < value.length; index++) {
      var pet = value[index];
      console.log(`Pet name is ${pet.petName} and it is a ${pet.type}`);
    }
  }
}


