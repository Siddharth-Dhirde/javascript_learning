let bigOctNum = 0o123422222222222222222222222222222222222n // Fine
// let bigNum = 0123422222222222222222222222222222222222n // Not Fine - use 'o' (alphabet) after '0' (zero)

console.log(bigOctNum, typeof bigOctNum);

let octNum = 0o124; // Fine
// let octNum = 0o1248; // Not Fine - use 0-7
console.log(octNum, typeof octNum);

let binNum = 0b100; // 


console.log(binNum, typeof binNum);
