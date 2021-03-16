// 1. String concatenation
console.log('my' + ' cat ');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1+2}`);
console.log("eli's code");
console.log('eli\ns code'); 

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 + 1); // divide
console.log(1 + 1); // multiply
console.log(1 + 1); // remainder
console.log(1 + 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter; 3
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = coounter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Coparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// often used to compress long if-statement
// nullableObject && nullableObject.something
/*if (nullableObject != null){
    nullableObject.something;
}*/
function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('😱')
    }
    return true;
}
// ! (not)
console.log(!value1); //val1=true -> false로 출력

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const sk1 = { name: 'sk'};
const sk2 = { name: 'sk' };
const sk3 = sk1;
console.log(sk1 == sk2); //f
console.log(sk1 === sk2); //f
console.log(sk1 === sk3); //t

// equality - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. Conditional operators: if
// if, else if, else
const name = 'sk';
if (name === 'sk') {
    console.log('Welcome sk!')
}else if (name === 'coder') {
    console.log('U R amazing coder');
}else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? val1 : val2;
console.log(name === 'sk' ? 'y' : 'n');

// 10. Switch statement
// use for multiple if checks
// use for enum-like vlaue check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('luv ya');
        break;
    default:
        console.log('same all');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, 
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0;i < 10; i++) {
    for (let j=0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break(loop완전히 끝냄), continue (지금것만 skip하고 다음으로 넘어감)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++){
    if ((i % 2) !== 0){
        continue;
    }
    console.log(`i: ${i}`);
}

// Q2. iterate from 0 to 10 and print number until reaching 8 (use break)
for (let i = 0; i < 11; i++){
        console.log(`i: ${i}`);
        if (i == 8) break;
}

for (let i = 0; i < 11; i++){
    if (i > 8) break;
    console.log(`i: ${i}`);
    
}