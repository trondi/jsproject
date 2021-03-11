//  1. Use Strict
// added in ES 5
// use this for Vanila Javascript
'use strict';

// 2. Variable
// let (added in ES 6)
let globalName = 'global name';
{
    let name = 'erica'
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var 은 예전에 사용 (don't ever use this!)
// var hoisting
console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const dayInweek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, symbol
// object, box container
// function, first-class function

//  number - special numeric values: infinity, -infinity, NaN
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53)~2*53
console.log(`value: ${bidInt}, type: ${typeof bigInt}`);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!` //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

