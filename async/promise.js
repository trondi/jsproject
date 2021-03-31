'use strict';

// Promise is a JavaScript object for asynchronous operation. 콜백 대신에 유용하게 쓰임
// 💛State: pending 후 -> fulfilled or rejected
// Producer vs Consumer 두가지 차이점 이해

// 1. Producer
// when new Promise is created, the executor runs automatically. executor라는 함수
const promise = new Promise((resolve, reject) => { //reject, resolve 기능 2개
  // doing some heavy work (network, read files) -> 시간이 걸림.. promise사용(비동기적 처리)
  console.log('doing something...'); //프로미스를 만드는 동시에 바로 실행. 사용자 요구시에만 실행 경우라면 사용x
  setTimeout(() => {
    resolve('ellie');//read file..
    // reject(new Error('no network')); //Error 자바에서 제공하는 오브젝트. 내용에는 사유가 들어감
  }, 2000);
});

// 2. Consumers: then, catch, finally를 이용하여 값을 가져올 수 있음
promise //
  .then(value => { //성공시
    console.log(value);
  })
  .catch(error => { //catch 부분에서 에러 발생시 어떻게 처리할건지 콜백함수 등록
    console.log(error);
  })
  .finally(() => { //성공, 실패에 상관없이 무조건 마지막에 실행
    console.log('finally');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num)); //promise나 값을 전달할 수 있음. 총 2초 소요  

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); //달걀을 받아오다가 에러발생
    //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) //then(hen => getEgg(hen)) 한가지만 받을때 축약가능
  .catch(error =>{ // 중간에 에러처리
      return 'err';
  })
  .then(cook) //then(egg => cook(egg))
  .then(console.log) //then(meal => console.log(meal));
  .catch(console.log); //에러 제일 밑으로 작성됨
  