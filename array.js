'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array(); // 방법1 : new 키워드
const arr2 = [1, 2]; // 방법 2 0[], 1[]

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); // ['🍎', '🍌']
console.log(fruits.length); // 2
console.log(fruits[0]); // object->fruits['name'], name에 상응하는 value가 나옴 🍎
console.log(fruits[1]); //🍌
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //마지막 인덱스 접근, 0부터 시작하기 때문
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

// c. forEach <- callback 함수
/* fruits.forEach(function (fruit, index, array){
    console.log(fruits, index, array);
}); 익명함수 => arrow함수*/
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove an item from the end
const poped = fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging 앞에 들어가도록
fruits.unshift('🍓', '🍋');
console.log(fruits);

// shift: remove an item from the benigging 앞부터 빠지도록, 당겨오는
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position 지정위치에서 데이터 삭제 어디서부터..
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1, 1); //원하는 인덱스, 몇개
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉');// 지워진 자리에 들어감
console.log(fruits);

// combine two arrays concat 연결, 새로운 배열 리턴
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); //
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥥')); //-1

// includes 있는지 없는지 T,F
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥥')); //false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥')); //마지막 인덱스 추가