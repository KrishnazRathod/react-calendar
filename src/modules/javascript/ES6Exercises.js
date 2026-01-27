// ES6 Practice Exercises
// Topics: Hoisting, TDZ, var–let–const, call / apply / bind
// ----------------------------------------------

// 1. Hoisting – var vs let
// Predict the output (line by line) and then run the code to check yourself.
// a) Uncomment and explain why you get each value or error.

console.log(num);   // undefined
var num = 5;
console.log(num);   // 5

console.log(count); // reference error
let count = 10;
console.log(count); // 10


// 2. TDZ (Temporal Dead Zone)
// What will happen when you run this function? Explain why.

function demoTDZ() {
    console.log(value); // reference error
    let value = 42;
    console.log(value); // 42
}
demoTDZ();


// 3. var vs let – scope and redeclaration
// a) Rewrite this code using let instead of var and fix any errors.

function counter() {
    for (var i = 0; i < 3; i++) {
        console.log("inside loop:", i);
    }
    console.log("outside loop:", i); // With var: inside -> 0,1,2 | outside -> 3. With let: outside -> ReferenceError (i not defined)
}
counter();


// 4. const – reassignment vs mutation
// a) Explain which lines are valid and which throw an error.

const user = { name: "Alice" };
user.name = "Bob";          // valid
user.age = 25;              // valid (adds a new property)
// user = { name: "Charlie" }; // error (cannot reassign a const variable). (kept commented to avoid stopping execution)

const numbers = [1, 2, 3];
numbers.push(4);            // [1,2,3,4]
// numbers = [4, 5, 6];        // error (cannot reassign a const variable). (kept commented to avoid stopping execution)


// 5. call vs apply – using existing array of arguments
// a) Convert the call example to use apply.

function sum(a, b, c) {
    return a + b + c;
}
const args = [1, 2, 3];

// Using call:
console.log(sum.call(null, 1, 2, 3)); // 6

// // TODO: Use apply with args to get the same result.
// console.log(sum.apply(null, args));    // 6


// 6. apply vs spread
// a) Rewrite the apply usage using the spread operator (...).

const scores = [10, 20, 30, 40];
const maxWithApply = Math.max.apply(null, scores);
console.log(maxWithApply); // 40

// const maxWithSpread = Math.max(...scores);
// console.log(maxWithSpread); // 40


// 7. bind – fixing this
// a) Use bind so that greet always prints the correct name, even when passed as a callback.

const person = {
    name: "Krishna",
    greet() {
        console.log("Hello, " + this.name);
    },
};


// setTimeout(person.greet, 1000); // This loses the correct this.

// // TODO: Use bind to fix it:

// const boundGreet = person.greet.bind(person)
// setTimeout(boundGreet, 1000)


// 8. call / apply / bind – reuse a function with different objects
// a) Use call, apply, and bind (three separate examples) to reuse introduce for userA and userB.

function introduce(city, country) {
    console.log(`Hi, I'm ${this.name} from ${city}, ${country}.`);
}

const userA = { name: "Asha" };
const userB = { name: "Rohan" };

// Example with call:
introduce.call(userA, "Delhi", "India");

// // TODO: Example with apply:
introduce.apply(userA, ["Delhi", "India"]);

// // TODO: Example with bind:
// // const introduceAsha = introduce.bind(userA,"Delhi", "India");
// // introduceAsha();


// 9. Challenge – explain the order and values
// a) Predict the output, then run and verify.

console.log(a);     // undefined
var a = 1;

function test() {
    console.log(a);   // undefined (local a is hoisted but not yet assigned)
    var a = 2;
    console.log(a);   // 2
}

test();
console.log(a);     // 1 (global a)

