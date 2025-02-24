var num1 = 3;
if (num1 % 2 == 0) {
  console.log(num1, "is even no.");
} else {
  console.log(num1, "is odd no.");
}


// --------------------------------------------------------------------------------------------------

// Normal Functions
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

const num2 = 232324;
if (isEven(num2)) {
  console.log(num2, "is even no.");
} else {
  console.log(num2, "is odd no.");
}

// --------------------------------------------------------------------------------------------------


// arrow func
const getfullName = (fName, lName) => {
    fullName = fName+ " " +lName;
    return fullName;
}
console.log(getfullName("Raj", "Kumar"));


// --------------------------------------------------------------------------------------------------

// IIFE (Immediately Invoked Function Expression) is an idiom in which a
// JavaScript function runs as soon as it is defined.
// It is also known as a self-executing anonymous function.

// standard IIFE
(function () {
  // statements…
  console.log("standard IIFE");
})();

// arrow function variant
(() => {
  // statements…
  console.log("arrow function IIFE");
})();

// async IIFE
(async () => {
  console.log("async IIFE");
})();

// no need to write function within () with void keyword operator
void function () {
  console.log("Executed!");
}();
// Logs "Executed!"


// Use cases of IIFEs include:
// 1. Avoiding polluting the global namespace by creating a new scope.
// 2. Creating a new async context to use await in a non-async context.
// 3. Computing values with complex logic, such as using multiple statements as a single expression.

// --------------------------------------------------------------------------------------------------

