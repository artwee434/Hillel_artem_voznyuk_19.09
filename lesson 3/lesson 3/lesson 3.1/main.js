let age = 25;
console.log(typeof age);

let name = "Alex";
console.log(typeof name);

let isStudent = true;
console.log(typeof isStudent);

let uniqueId = Symbol("description");
console.log(typeof uniqueId);

let user = { name: "Bob" };
console.log(typeof user);

let person = {
  name: "Alice",
  age: 30,
  sayHello: function () {
    console.log("Hello, " + this.name, typeof this.sayHello);
  },
};

let bigNum = 246802468024680246802468024680n;
console.log(typeof bigNum);

const emptyValue = null;
console.log(typeof emptyValue);

let variable;
console.log(variable);
