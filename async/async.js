// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {// 사용자의 정보를 백엔드에서 받아오는 경우
    // do network reqeust in 10 secs....
    return 'ellie';
  }
  
  const user = fetchUser();
  user.then(console.log); //fetchUser가 promise를 호출하기 때문에 이렇게 써줘도 됨.
  console.log(user);
  
  // 2. await ✨
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function getApple() {
    await delay(2000);
    return '🍎';
  }
  
  async function getBanana() {
    await delay(1000);
    return '🍌';
  }
  
  async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  }
  
  pickFruits().then(console.log);
  
  // 3. useful APIs ✨
  function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then //get promise를 전달
    (fruits =>    //과일의 배열을 전달하고 전달받음
      fruits.join(' + ')//배열 스트링으로 묶음
    );
  }
  pickAllFruits().then(console.log);
  

  function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]); //race API 가장먼저 값을 전달하는 것을 출력
  }
  
  pickOnlyOne().then(console.log);