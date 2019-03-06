'use strict';

// function Person(name) {
//   if (!(this instanceof Person)) {
//     console.log('this is not a person', name);
//     return new Person(name);
//     // throw new Error('You must use `new` when creating a person');
//   }
//   console.log(name);
//   console.log(this);
//   this.name = name;

//   // this.sayHello = sayHello;


//   // return this;
// }

// Person.prototype.sayHello = function sayHello(otherPersonName) {
//   console.log(`Hello ${otherPersonName}, I'm ${this.name}`);
// };

// Object.defineProperties(Person.prototype, {
//   name: {
//     get: function () {
//       return this._name;
//     }
//   },
//   age: {
//     get: function () {
//       return this._age;
//     },
//     set: function (age) {
//       if (typeof age !== 'number') {
//         throw new Error(`'age' is just a number....`);
//       }
//       this._age = age;
//     }
//   }
// });


class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  sayHello(otherPersonName) {
    console.log(`Hello ${otherPersonName}, I'm ${this.name}`);
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age !== 'number') {
      throw new Error(`'age' is just a number....`);
    }
    this._age = age;
  }
}



{
  name: 'Bob'
}

const bob = new Person('Bob', 23);
const sally = new Person('Sally', 26);

console.log(bob.sayHello(sally.name));
console.log(sally.sayHello === bob.sayHello);

console.log(bob);
console.log(sally);

sally.age = '27';

console.log(sally);

const backpack = {
  name: 'Backpack'
};
// backpack.sayHello = sally.sayHello;
console.log(backpack);

// backpack.sayHello(sally.name);

sally.sayHello.apply(backpack, [bob.name]);
