// arrays, loops

const arr = ["Japan", "India", "Russia", "China"];
console.log(typeof arr);
console.log(arr.slice(0,3));
console.log('\n\n')

// for loop
console.log("Using for loop: ");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of
console.log("\nUsing for of loop:  ");
for (let i of arr) {
  console.log(i);
}

// for in
console.log("\nUsing for in loop:  ");
for (let i in arr) {
  console.log(i, arr[i]);
}

// forEach
console.log("\nUsing forEach loop:  ");
arr.forEach((i) => {
  console.log(i);
});

let ar = [];
ar.forEach((i) => {});
