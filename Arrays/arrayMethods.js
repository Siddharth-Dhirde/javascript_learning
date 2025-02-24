const array = [12, 3,33,53, 2, 3, 4, 5];

console.log("sanket1");
// Checks whether an element is even
const even = (element) => element % 2 === 0;

function isOdd2(i){
   if (i%2 !== 0){
     return true;
   }
   return false;
}


console.log("sanket2");
console.log(array.some(even));
// Expected output: true
console.log("sanket3");
function isOdd(i){
   if (i%2 !== 0){
     return true;
   }
   return false;
}
const oddArr = [2,3,4,323,6423,87,53];
console.log(oddArr.every(isOdd));
console.log("sanket4");