'use strict';

// JavaScript is synchronous. 동기적임  
// Execute the code block in order after hoisting.
// hoisting: var, function declaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); //2ms 후

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) { //login API
    setTimeout(() => { //delay를 하여 네트워크 통신 하는것처럼
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found')); //에러 오브젝트 만듦
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {//사용자의 데이터를 받아서 역할을 서버에 요청해서 다시 받아오도록 하는것..
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access')); //콜백호출
      }
    }, 1000);
  }
}

const userStorage = new UserStorage(); //클래스 생성
const id = prompt('enter your id'); //prompt API사용
const password = prompt('enter your passrod');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);



// Bad case : 디버깅이 어렵고 유지보수도 어려움 콜백지옥
