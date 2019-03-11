// black box, no changing orderSupplies
function orderSupplies(item, callback) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  setTimeout(function() {
    warehouse = {
      paint: {
        product: 'Neon Green Paint',
        directions: function() { return 'mix it!' }
      },
      brush: {
        product: 'Horsehair brush',
        directions: function() { return 'start painting!' }
      }
    };

    callback(warehouse[item]);
  }, deliveryTime);
}

function receivedItem(item) {
  console.log(`Received ${item.product}, time to ${item.directions()}`);
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
orderSupplies('paint', function (item) {
  receivedItem(item);
  orderSupplies('brush', receivedItem);
});