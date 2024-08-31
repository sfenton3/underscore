import isObject from './isObject.js';
import { hasEnumBug } from './_setup.js';
import collectNonEnumProps from './_collectNonEnumProps.js';

// Retrieve all the enumerable property names of an object.
export default function allKeys(obj) {
  if (!isObject(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (hasEnumBug) collectNonEnumProps(obj, keys);
  return keys;
}

// Test Method
let userRecord = {
  firstName : "Scott",
  lastName : 'Fenton',
  email : 'test@gmail.com'
}

// Returns an array of object properties
console.log(allKeys(userRecord));

// What does it do?
// If the input is not an object it returns an empty array
// This method initializes an array and gets each key from the object and pushes it into an array and then returns that array


