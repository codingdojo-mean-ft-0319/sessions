// var array;

var count = 0;


function alterCount() {
  count = 0;

  console.log('alter count', count);

  count = 232332;

  console.log('altering.... ', count);
}


alterCount();


console.log('count after', count);
 
function counter() {
  var count = 0;

  function childScope() {
    count += 1;
    return count;
  }

  return childScope;
}

var child = counter();
var child2 = counter();

console.log( child() );
// 1

console.log(child2());
// 1

console.log(child());
// 3

console.log(child());
// 4

console.log(child());
// 5

// console.log('array on line 51', array);

const array = [123123, 234, 234, 2374, 34534, 5];

for (let index = 0; index < array.length; index++) {
  console.log('value', array[index], index);
}

array.push('some new value');

console.log('index after loop', array);

let myArray;

myArray = [];

