function each(array, callback) {

  // console.log(callback.toString());
  // loop through the array
  for(let index = 0; index < array.length; index++) {
    // callback(array[i]); // invoking the callback many times... delegation!
    callback(array[index], index, array);
  }
}

const strArr = ['cat', '10', '345', 'dog', '123'];

// each(strArr, console.log);

// function square(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const result = array[index] * array[index];
//     results.push(result);
//   }

//   return results;
// }

// function add(array) {
//   const results = [];

//   for (let index = 0; index < array.length; index++) {
//     const result = array[index] + array[index];
//     results.push(result);
//   }

//   return results;
// }

function map(array, callback) {
  const results = [];

  for (let index = 0; index < array.length; index++) {
    const result = callback(array[index], index, array);
    console.log(`${array[index]} is ${result}`);
    results.push(result);
  }

  return results;
}

// [1,3,5,7]

function filter(array, callback) {
  const results = [];
  console.log(array);

  for (let index = 0; index < array.length; index++) {
    const result = callback(array[index], index, array);
    // console.log(`${array[index]} is even ? ${result}`);
    if (result) {
      results.push((array[index]));
    }
  }

  return results;
}
const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(nums, function (number) {
  return number % 2 !== 0;
}))

const numArr = [23, 56, 26, 98];
// console.log('res', add(numArr));
// console.log(map(numArr, addTwo))
// console.log('res', square(numArr));
// console.log(map(numArr, function (number) {
//   return number * number;
// }))
const newNums = filter(map(strArr, toInt), function (element) {
  console.log(typeof element, isNaN(element));
  return !isNaN(element);
});

console.log('new nums', newNums);

const ress = strArr.map(function (element) {
  return parseInt(element, 10);
})
  .filter(function (element) {
    return !isNaN(element);
  });

console.log(ress);

// const filterRes = filter(newNums, function (element) {
//   console.log(typeof element, isNaN(element));
//   return !isNaN(element);
// })

// console.log('filter', filterRes);

function addTwo(num1) {
  return num1 + num1;
}

function toInt(strNum) {
  return parseInt(strNum, 10);
}