/**
 * 관련 강의 영상: https://youtu.be/36HrZHzPeuY
 */
/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
 {
    const person1 = {
      name: 'Ellie',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'Bob',
        },
      },
    };
    const person2 = {
      name: 'Bob',
    };
  
    // 💩💩💩💩💩💩
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);//manager가 존재하지 않기 때문에 오류 발생
    }
  
    // 💩💩💩
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    // 💩
    {
      function printManager(person) {
        console.log(person.job && person.job.manager && person.job.manager.name);//코드중복
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ✨ 옵셔널 체이닝
    {
      function printManager(person) {
        console.log(person.job?.manager?.name);
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
  
  /**
   * Nullish Coalescing Operator (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  {
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
      const name = 'Ellie';
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    {
      const name = null;
      const userName = name || 'Guest';
      console.log(userName); //Guest
    }
  
    // 💩
    {
      const name = '';
      const userName = name || 'Guest';
      console.log(userName); //Guest가 할당됨
  
      const num = 0;
      const message = num || 'undefined';
      console.log(message);
    }
  
    // ✨
    {
      const name = '';
      const userName = name ?? 'Guest';
      console.log(userName); //공백출력
  
      const num = 0;
      const message = num ?? 'undefined';
      console.log(message); // 0 출력
    }
  }