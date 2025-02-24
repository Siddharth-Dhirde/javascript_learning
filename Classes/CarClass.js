class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
  owner(ownerName) {
    console.log(`Owner Name is ${ownerName}`);
  }
}

const bmw = new Car("BMW", "2021");

console.log(bmw.age());
bmw.owner("Raj");


bmw.tempVar = "TempVar";
console.log(bmw.tempVar);

bmw.tempMethod = () => {console.log("Temp Method")}
bmw.tempMethod();

bmw.tempFuncMethod = function (){
    console.log("Temp Function Method")
}
bmw.tempFuncMethod()

console.log('\n\n\n');

Car.prototype.protoVar = "Proto Var............"
Car.prototype.protoMethod = function() {
    console.log("Proto Method")
}

console.log(bmw.protoVar)
bmw.protoMethod();

