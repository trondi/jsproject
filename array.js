'use strict';

// Arrayπ

// 1. Declaration
const arr1 = new Array(); // λ°©λ²1 : new ν€μλ
const arr2 = [1, 2]; // λ°©λ² 2 0[], 1[]

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits); // ['π', 'π']
console.log(fruits.length); // 2
console.log(fruits[0]); // object->fruits['name'], nameμ μμνλ valueκ° λμ΄ π
console.log(fruits[1]); //π
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //λ§μ§λ§ μΈλ±μ€ μ κ·Ό, 0λΆν° μμνκΈ° λλ¬Έ
console.clear();

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach <- callback ν¨μ
/* fruits.forEach(function (fruit, index, array){
    console.log(fruits, index, array);
}); μ΅λͺν¨μ => arrowν¨μ*/
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging μμ λ€μ΄κ°λλ‘
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the benigging μλΆν° λΉ μ§λλ‘, λΉκ²¨μ€λ
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position μ§μ μμΉμμ λ°μ΄ν° μ­μ  μ΄λμλΆν°..
fruits.push('π', 'π', 'π');
console.log(fruits);
fruits.splice(1, 1); //μνλ μΈλ±μ€, λͺκ°
console.log(fruits);
fruits.splice(1, 0, 'π', 'π');// μ§μμ§ μλ¦¬μ λ€μ΄κ°
console.log(fruits);

// combine two arrays concat μ°κ²°, μλ‘μ΄ λ°°μ΄ λ¦¬ν΄
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2); //
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯')); //-1

// includes μλμ§ μλμ§ T,F
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯')); //false

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π₯₯')); //λ§μ§λ§ μΈλ±μ€ μΆκ°