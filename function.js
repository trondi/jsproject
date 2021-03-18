// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb (변수는 명사)
// e.g. createCardAndPoint -> createCard, createPoint (세분화)
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitives parameters: passed by value
// object parameters: passed by reference
function changeName (obj) {
    obj.name = 'coder';
}
const sk = { name: 'sk' };
changeName(sk);
console.log(sk);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'sk');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}
//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
//can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { //annoymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love u') {
        printYes();
    }else {
        printNo();
    }
}
const printYes = function () { //annoymous function
    console.log('Y');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('N');
    //print();
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love u', printYes, printNo);

// Arrow function
// always annoymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint1 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
/*
const add = function (a, b) {
    return a + b;
}; 
*/
const simpleMultiply = (a, b) => {
    //do smth more, return을 써야함
    return a * b;
};

//IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();


/*--------------------*/
function calculate(command, a, b){
    switch (command){
        case 'add':
            console.log(`a + b = ${a} + ${b} = ${a + b}`);
            break;
        case 'substract':
            console.log(`a - b = ${a} - ${b} = ${a - b}`);
            break;
        case 'multiply':
            console.log(`a * b = ${a} * ${b} = ${a * b}`);
            break;
        case 'divide':
            console.log(`a / b = ${a} / ${b} = ${a / b}`);
            break;
        case 'remainder':
            console.log(`a % b = ${a} % ${b} = ${a % b}`);
            break;
        default:
            throw Error('unknown command');
    }
    
}
calculate('substract', 5,3);
