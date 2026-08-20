//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Typeof dataTypes: 
// Primitive; string = string
// number = number 
// boolean = boolean
// null = object
// undefined = undefined
// symbel = symbel
// bigInt = bigInt
//Reference type (non-primitive); array = object
// function = function 
// object = object 

// =============================================

// Stack (Used by Primitive) and Heap (Used by Non-Primitive)

// Stack Example

let name1 = "Alice"; 
let name2 = name1; // A new copy of "Alice" is made on the stack

name2 = "Bob"; 
console.log(name1); // "Alice" (Unchanged)
console.log(name2); // "Bob"

// Heap Example

let user1 = { name: "Alice" }; // Object created in heap; pointer stored in stack
let user2 = user1;             // Copies the pointer, NOT the object

user2.name = "Bob";            // Mutates the shared heap object
console.log(user1.name);       // "Bob" (Changed!)
console.log(user2.name);       // "Bob"

