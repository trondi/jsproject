'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// 1. Literals and properties
// object = { key : value };
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const sk = { name: 'sk', age: 4 }; //클래스가 없어도 오브젝트 생성가능
print(sk);

// with JavaScript magic (dynamically typed language)
// can add properties later, 유지보수 어렵, 에러 가능성
sk.hasJob = true;
console.log(sk.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); //다른 방법(string, '')으로 접근 가능, CP 어떤키가 필요한지 모를 때, 런타임때 결정이 될때 사용함, 실시간으로 원하는 키 받아올때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); //이 시점에서 뭘받아올지 모름
}
printValue(ellie, 'name'); // key는 string타입으로 전달해야함
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {}; 생략
  this.name = name;
  this.age = age;
  // return this; 생략
}

// 5. in operator: property existence check (key in obj)
console.log('name' in sk);
console.log('age' in sk);
console.log('random' in sk);
console.log(sk.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 아전 로그 지움
for (let key in sk) {
  console.log(key);
}

// for (value of iterable) 배열..
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);