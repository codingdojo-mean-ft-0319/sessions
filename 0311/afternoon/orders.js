// black box, no changing orderSupplies
function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'A large tarp',
          directions: () => 'cover the floor!'
        }
      };

      if (item in warehouse) {
        resolve(warehouse[item]);
      } else {
        reject(new Error(`'${item}' is out of stock`));
      }
  
    }, deliveryTime);
  });
}

function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
}

const paint = orderSupplies('paint');
const brush = orderSupplies('brush');
const tarp = orderSupplies('tarp');
const roller = orderSupplies('roller');

Promise.all([tarp, paint, brush, roller])
  .then(items => items.forEach(receivedItem))
  .catch(handleError);

// tarp 
//   .then(receivedItem)
//   .then(() => paint)
//   .then(receivedItem)
//   .then(() => brush)
//   .then(receivedItem)
//   .then(() => roller)
//   .catch(handleError)
  
  function handleError(error) {
    console.log(error.message);
  }
/** 
 * Possible Output:
 * 
 * Received Neon Green Paint, time to mix it!
 * Received Horsehair brush, time to start painting!
 * 
 * or
 * 
 * Received Horsehair brush, time to start painting!
 * Received Neon Green Paint, time to mix it!
 * 
 * Consider the second set. We immediately try to paint, 
 * but how can we paint if we have not received it yet?
*/

// simple, yet inefficient solution (potentially doubles wait time)
// orderSupplies('paint', function (item) {
//   receivedItem(item);
//   orderSupplies('brush', receivedItem);
// });


// let havePaint = false;

// orderSupplies('paint', function (item) {
//   receivedItem(item);

//   havePaint = true;
// });
// orderSupplies('brush', function (item) {
//   if (havePaint) {
//     receivedItem(item);
//   } else {
//     const timer = setInterval(function () {
//       console.log('... checking for paint...');

//       if (havePaint) {
//         receivedItem(item);
//         clearInterval(timer);
//       }
//     }, 50)
//   }
// });

// orderSupplies('brush', handleBrush);

// function handleBrush(item) {
//   console.log('checking for paint...', item);
//   if (havePaint) {
//     return receivedItem(item);
//   }

//   setTimeout(handleBrush, 50, item);
// }



// const products = ['paint', 'brush'];

// function order(items) {
//   const results = [];

//   for (let index = 0; index < items.length; index++) {
//     const item = items[index];

//     // console.log(`item is ${item} and index is ${index}`);

//     orderSupplies(item, function (product) {
//       // console.log(product, index);
//       // console.log(results);
//       results[index] = product;

//       const temp = results.filter(i => i);
//       // console.log('temp', temp);
//       if (temp.length === items.length) {
//         results.forEach(receivedItem);
//       }

//     });
//   }
// }

// order(products);

// const paint = new Promise(function (resolve, reject) {
//   orderSupplies('paint', resolve)
// });

// const brush = new Promise(function (resolve, reject) {
//   orderSupplies('brush', resolve)
// });

// const tarp = new Promise(function (resolve, reject) {
//   orderSupplies('tarp', resolve)
// });

// tarp
//   .then(receivedItem)
//   .then(() => paint)
//   .then(receivedItem)
//   .then(() => brush)
//   .then(receivedItem)
//   .catch(console.log);
