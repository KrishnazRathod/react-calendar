// Hoisting is the behavior where variable declarations are moved to the top of their containing scope (global, function) during the completion phase or before the executed code.

// Example:
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// TDZ is the behavior where the variable is declared but not initialized and is not accessible before the declaration.
// Example:
console.log(y); // ReferenceError: y is not defined
let y = 20;
console.log(y); // 20

// Function hoisting is the behavior where the function declaration are moved to the top of their containing scope (global, function) during the completion phase or before the executed code.
// Example:
console.log(greet()); // Output: "Hello!"
function greet() {
    console.log("Hello!");
}


// var hoisting is the behavior where the var variable are moved to the top of their containing scope (global, function) during the completion phase or before the executed code.



// initial value is required for const
// const b;
// b = 4;
// console.log(b); // 4



let a;
a = 3;
console.log(a); // 3


if (true) {
    var leak = "I am everywhere";
    let stay = "I stay here";
}
console.log(leak); // Output: "I am everywhere"
console.log(stay); // ReferenceError: stay is not defined


// const is immutable
const user = { name: "Krishna" };
user.name = "Rathod"; // ✅ This works!
// user = { name: "New" }; // ❌ TypeError: Assignment to constant variable
console.log(user); // { name: "Rathod" }


// let is mutable
let user2 = { name: "Krishna" };
user2.name = "Rathod"; // ✅ This works!
user2 = { name: "New" }; // ✅ This works!
console.log(user2); // { name: "New" }


// ============================================
// REDECLARATION vs REASSIGNMENT
// ============================================

// REDECLARATION: Declaring the same variable name again in the same scope
// REASSIGNMENT: Changing the value of an already declared variable

// --- VAR: Allows both redeclaration and reassignment ---
var count = 10;
var count = 20; // ✅ Redeclaration allowed - no error
console.log(count); // 20

var price = 100;
price = 200; // ✅ Reassignment allowed
console.log(price); // 200

// --- LET: Does NOT allow redeclaration, but allows reassignment ---
let score = 50;
// let score = 60; // ❌ SyntaxError: Identifier 'score' has already been declared

let points = 30;
points = 40; // ✅ Reassignment allowed
console.log(points); // 40

// Different scopes allow redeclaration with let
if (true) {
    let value = 1;
    console.log(value); // 1
}
if (true) {
    let value = 2; // ✅ Allowed - different block scope
    console.log(value); // 2
}

// --- CONST: Does NOT allow redeclaration, and does NOT allow reassignment ---
const PI = 3.14;
// const PI = 3.14159; // ❌ SyntaxError: Identifier 'PI' has already been declared
// PI = 3.14159; // ❌ TypeError: Assignment to constant variable

// However, const objects/arrays can have their properties/elements modified
const person = { name: "John" };
person.name = "Jane"; // ✅ Allowed - modifying property, not reassigning the variable
person.age = 25; // ✅ Allowed - adding property
// person = { name: "Bob" }; // ❌ TypeError: Assignment to constant variable

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed - modifying array contents
numbers[0] = 10; // ✅ Allowed - modifying array element
// numbers = [5, 6, 7]; // ❌ TypeError: Assignment to constant variable

// Summary:
// - var: ✅ Redeclare ✅ Reassign
// - let: ❌ Redeclare ✅ Reassign
// - const: ❌ Redeclare ❌ Reassign (but can modify object/array contents)


// The call() method invokes a function immediately. It takes the this context as the first argument, followed by arguments for the function individually (separated by commas)
function introduce(city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}
const user1 = { name: "Krishna" };
introduce.call(user1, "Indore", "India"); // Hi, I'm Krishna from Indore, India.

// The apply() method invokes a function immediately. It takes the this context as the first argument, followed by an array of arguments for the function.
function introduce(city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}
const user2 = { name: "Rajesh" };
introduce.apply(user2, ["Mumbai", "India"]);

//why we need apply method?

// because we can pass arguments as an array.
const numbers = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, numbers);
console.log(max); // 5

// because we can pass arguments as a comma separated values.
const numbers2 = [1, 2, 3, 4, 5];
const max2 = Math.max.apply(null, numbers2);
console.log(max2); // 5

//we can directly pass an array and max method to get the result ?
const numbers3 = [1, 2, 3, 4, 5];
const max3 = Math.max(...numbers3);
console.log(max3); // 5



// The bind() method returns a new function with the this context permanently bound to it.

function introduce(city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}
const user3 = { name: "Rajesh" };
const introduceUser = introduce.bind(user3, "Mumbai", "India");
introduceUser(); // Hi, I'm Rajesh from Mumbai, India.



