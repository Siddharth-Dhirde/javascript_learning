let str_n = "109871233";

let str_arr = str_n.split("");
let num_arr = str_arr.map(Number);
num_arr.sort((a, b) => b - a);
let ans = num_arr.join("");
console.log(ans);


// console.log(
//   str_n
//     .split("")
//     .map(Number)
//     .sort((a, b) => b - a)
//     .join("")
// );


let sortedStr = str_n.split('').sort((a, b) => b - a).join('');
console.log(sortedStr);
