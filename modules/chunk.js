import { slice } from './_setup.js';

// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
export default function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(slice.call(array, i, i += count));
  }
  return result;
}

// Test Method
let arr = ['apple', 'cider', 'orange', 'pineapple'];
console.log("🚀 ~ arr:", chunk(arr, 2));
console.log("🚀 ~ arr:", chunk(arr, 3));


// Arrays within array
// fills arrays with last array being different size if count is not mod 0

