// Returns a function that will only be executed on and after the Nth call.
export default function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}


// Test this Method

let x = function (){
  console.log('Hello World');
}

let y = after(5, x);
y();
y();
y();

// This is some magic