const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
  ];
  
  // Callback function to select low volumes 
  function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
  }
  
console.log(  Object.entries(fruits))
  // Group by ok and low
  const result = Object.groupBy(fruits, myCallback);

console.log(result);