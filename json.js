'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON 간단한 데이터 타입
// stringfy(obj) 오브젝트를 제이슨으로
let json = JSON.stringify(true);
console.log(json); //true

json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple", "banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); //배열로 나옴, 함수는 미포함. 오브젝트 데이터가 아니기 때문

json = JSON.stringify(rabbit, ['name', 'color', 'size']); //특정프로퍼티만 json으로 변환
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { //콜백함수.
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump(); //함수는 직렬화할때 미포함
// obj.jump();

console.log(rabbit.birthDate.getDate()); //29
console.log(obj.birthDate.getDate()); //에러 string이기 때문
//41번쨰 줄 처리하면 29로 출력