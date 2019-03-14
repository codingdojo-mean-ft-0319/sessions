const myStr: string = 'this is a string';

// myStr = '23423';

const array: Array<BoolStrNum> =  ['dog'];


array.push('string');
array.push(234);
// array.push({});
array.push(true);

type BoolStrNum = boolean | string | number;

const first = array[0];


// for (let index = 0; index < first.length; index++) {
//   console.log(first.charAt(index));
// }

function isString(value: any): value is string {
  return typeof value === 'string';
}

if (isString(first)) {
  first.toString();
}

interface Login {
  email: string;
  password?: string;
}


const login: Login = {
  email: 'email',
};

login.email = 'bob@email.com';

interface Register extends Login {
  age: number;
  name: string;
}

const register: Register = {
  email: 'email',
  name: 'Bob',
  age: 23
};

class User {
  constructor(public name: string, public age: number) {
    this.sayHello(name);
  }

  sayHello(name) {
    console.log(`Hello ${name}, I'm ${this.name}`);
  }
}

const user = new User('Bob', 23);

user.sayHello('George');

class Person extends User {
  constructor(name: string, age: number = 34) {
    super(name, age);

    this.sayHello(name);
  }
}

const person = new Person('Sally');

person.sayHello(user.name);
