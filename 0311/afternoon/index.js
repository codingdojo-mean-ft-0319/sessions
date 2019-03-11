

// console.log('before');

// function sayHello(name) {
//   setTimeout(function () { 
//     console.log(`Hello, ${name}`);
//   }, 2000);
// }

// sayHello('Bob');

// console.log('after');

function getThingsFromDB(query, callback) {
  setTimeout(function () {
    const data = ['thing1', 'thing2', 'thing3'];
    console.log(query);
    callback(data);
  }, 1500);
  // whatevers left 
}


getThingsFromDB('select * from things;', function (things) {
  console.log('inside callback', things);
});
