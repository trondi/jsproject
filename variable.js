//  1. Use Strict
// added in ES 5
// use this for Vanila Javascript
'use strict';

// 2. Variable, rw(read/write)
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

// 3. Constant, r (read only)
// use const whenever possible.
// only use let if variable needs to change.
const dayInweek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive type, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
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

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//  number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);


// bigInt (fairly new, don't use it yet) 새롭게 추가된 타입, 크롬, 파이어폭스에서만 지원(2021.3 기준)
const bigInt = 1234567890123456789012345678901234567890n; // 자바스크립트에서 표현되는 수의 정도 over (-2**53)~2*53
console.log(`value: ${bidInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!` //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, thpe: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, thpe: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const sk = {name: 'sk', age:10};
sk.age = 21;

// 5. Dynamic typing: dynamically typed language!
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);