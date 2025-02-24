// References:
//  https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/

// -----------------------------------------------------------------------------------------------

// BigInt:
// BigInt data type can represent numbers greater than 253-1 which helps to perform operations on large numbers. 
// The number is specified by writing ‘n’ at the end of the value

let bigNum = 123422222222222222222222222222222222222n
console.log(bigNum)
console.log(typeof(bigNum))

// -----------------------------------------------------------------------------------------------

// null
function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels("sky"));
// Expected output: 0

// Difference between null and undefined
typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true

// -----------------------------------------------------------------------------------------------

// Symbol
// Symbol data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.
let sym = Symbol("Hello")
console.log(typeof(sym));
console.log(sym);
console.log(sym.toString());



// -----------------------------------------------------------------------------------------------


