var myStr = 'this is a string';
// myStr = '23423';
var array = ['dog'];
array.push('string');
array.push(234);
// array.push({});
array.push(true);
var first = array[0];
// for (let index = 0; index < first.length; index++) {
//   console.log(first.charAt(index));
// }
function isString(value) {
    return typeof value === 'string';
}
if (isString(first)) {
    first.toString();
}
var login = {
    email: 'email'
};
login.email = 'bob@email.com';
var register = {
    email: 'email',
    name: 'Bob',
    age: 23
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
