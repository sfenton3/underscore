// Returns a function that will only be executed up to (but not including) the
// Nth call.
export default function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}

// Create my own function
// This function executes after being called x times with the given function
// Why does times retain its value?
function after(times, func){
  return function() {
    if (--times < 1) {
      console.log(this);
      console.log(arguments);
      return func.apply(this, arguments);
    }
  }
}

let y = after(2, () => console.log('Hello World'));
y();
y();

console.log('---')


// Test Method

let x = function (x , y){
  console.log('hello world');
}

let beforeIter = before(3, x);
beforeIter();
beforeIter();
beforeIter();
beforeIter();
beforeIter();
beforeIter();
beforeIter();

// Why this works
// There are two implicit parameters on every functionm this and arguments

// Play around with returning functions
// let identity = v => v;
// console.log(identity(10));

// Return a function
const generateSumFinder = () => {
  const sum = (a, b) => a + b;
  return sum;
}

// set function to var
const sum = generateSumFinder();
console.log("🚀 ~ sum:", sum(1,4))

// call function without setting variable
console.log("🚀 ~ generateSumFinder():", generateSumFinder()(1,5))

// return multiple functions in a chain
const sumChain = x => y => z => x + y + z
console.log("🚀 ~ sumChain:", sumChain(1)(2)(10))


// This blows my mind
function sumChainExpanded(x){
  return function (y){
    return function (z){
      return x + y + z;
    }
  }
}

console.log("🚀 ~ sumChainExpanded:", sumChainExpanded(1)(2)(3))

const generate = f => arg => f(f(arg));
const f1 = generate(Math.exp);

console.log("🚀 ~ f1(16);:", f1(2))


// Closure Example
const savePassword = password => passwordForCheck => password === passwordForCheck
const secret = 'test123';
const isCorrectPassword = savePassword(secret);

console.log(isCorrectPassword('test123'));
console.log(isCorrectPassword('test'));














