let user = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

// ----------------------------------------------------------------------------------------------------

// Literals and properties
// We can immediately put some properties into {...} as “key: value” pairs:
let user3 = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
console.log(user3);
console.log(user3.name);
// The value can be of any type. Let’s add a boolean one:
user3.isAdmin = true;
console.log(user3["isAdmin"]);
// To remove a property, we can use the delete operator:
delete user3.age;
console.log(user3.age ? `Age: ${user3.age}` : "Age doesn't exists");

// ----------------------------------------------------------------------------------------------------

// Square brackets
console.log();
// We can also use multiword property names, but then they must be quoted:
let user4 = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};
console.log(user4["likes birds"]);
// delete
delete user4["likes birds"];
console.log(user4);

// ----------------------------------------------------------------------------------------------------

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
// For instance:
let fruit = "apple";
let bag = {
  [fruit]: 5, 
  // the name of the property is taken from the variable fruit
};
console.log("\n" + bag.apple); // 5 if fruit="apple"

// Essentially, that works the same as:
// let fruit = "apple";
// let bag = {};
// // take property name from the fruit variable
// bag[fruit] = 5;

// ----------------------------------------------------------------------------------------------------

// Property value shorthand
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}
let John = makeUser("John", 30);
console.log(John.name); // John
// In the example above, properties have the same names as variables.
// The use-case of making a property from a variable is so common, that there’s a special property value shorthand to make it shorter.
// Instead of name:name we can just write name, like this:
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}
let John2 = makeUser("John", 30);
console.log(John2.name); // John

// ----------------------------------------------------------------------------------

// Property names limitations
// A variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return); // 6
console.log("\n" + obj.for + obj.let + obj.return); // 123 (+ literal converts to string)
console.log("\n", obj.for + obj.let + obj.return); // 6

let obj2 = {
  0: "test", // same as "0": "test"
};
// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj2["0"]); // test
console.log(obj2[0]); // test (same property)


// ----------------------------------------------------------------------------------

// Object Methods:

// Copies properties from a source object to a target object
// Object.assign(target, source)
Object.assign(John, obj2);
console.log(John);


// Creates an object from an existing object
// Object.create(object)
const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`\n\nMy name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};
const me = Object.create(person);
me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten
me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"


// Returns an array of the key/value pairs of an object
// Object.entries(object)
console.log('\n', "Object Entries: ", Object.entries(John));
let fruits = {Bananas:300, Oranges:200, Apples:500};
let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  console.log(fruit + ": " + value) ;
}
// Object.entries() also makes it simple to convert objects to maps:
const myMap = new Map(Object.entries(fruits));
console.log("\nMAP: ", myMap);


// Creates an object from a list of keys/values
// Object.fromEntries()
let fruits2 = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];
const myObj = Object.fromEntries(fruits2);
console.log("\n\nmyObj with fromEntries: ", myObj);

// Returns an array of the keys of an object
// Object.keys(object)
console.log("\n", Object.keys(John));

// Returns an array of the property values of an object
// Object.values(object)
console.log("\n", Object.values(John));
console.log(John.name.entries());

