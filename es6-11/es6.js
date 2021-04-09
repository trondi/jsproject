/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 */

 {
    const ellie1 = {
      name: 'Ellie',
      age: '18',
    };
  
    const name = 'Ellie';
    const age = '18';
  
    // 💩
    const ellie2 = {
      name: name,
      age: age,
    };
  
    // ✨ key = value 생략 가능
    const ellie3 = {
      name,
      age,
    };
  
    console.log(ellie1, ellie2, ellie3);
    console.clear();
  }
  
  /**
   * Destructuring Assignment
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
   *
   */
  {
    // object
    const student = {
      name: 'Anna',
      level: 1,
    };
  
    // 💩
    {
      const name = student.name;
      const level = student.level;
      console.log(name, level);
    }
  
    // ✨
    {
      const { name, level } = student; //접근방법
      console.log(name, level);
  
      const { name: studentName, level: studentLevel } = student; //새로운 이름으로 선언
      console.log(studentName, studentLevel);
    }
  
    // array에서도..
    const animals = ['🐶', '😽'];
  
    // 💩
    {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
    }
  
    // ✨
    {
      const [first, second] = animals;
      console.log(first, second);
    }
    console.clear();
  }
  
  /**
   * Spread Syntax 활용도 높음. 주소의 참조 값만 복사해서옴. 원래 것 변경 시 다 변경될 수 있음
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   *
   */
  {
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
  
    // array copy
    const arrayCopy = [...array];
    console.log(array, arrayCopy);
  
    const arrayCopy2 = [...array, { key: 'key3' }]; //추가
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);
  
    // object copy
    const obj3 = { ...obj1 };
    console.log(obj3);
  
    // array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);
  
    // object merge
    const dog1 = { dog: '🐕' };
    const dog2 = { dog: '🐶' };
    const dog = { ...dog1, ...dog2 };//키가 동일하면 뒤에꺼가 앞에 것을 덮음
    console.log(dog);
    console.clear();
  }
  
  /**
   * Default parameters
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
   */
  {
    // 💩
    {
      function printMessage(message) {
        if (message == null) {
          message = 'default message';
        }
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();//undefined
    }
  
    // ✨
    {
      function printMessage(message = 'default message') {//default 메세지
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
    console.clear();
  }
  
  /**
   * Ternary Operator
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
   */
  {
    const isCat = true;
    // 💩
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ✨
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }
    console.clear();
  }
  
  /**
   * Template Literals
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
   */
  {
    const weather = '🌤';
    const temparature = '16°C';
  
    // 💩
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ✨ 백틱 이용~~
    
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }