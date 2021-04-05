// 함수 선언
function doSmth(add) {
    console.log(add);
    const result = add(2,3);
    console.log(result);
}

function add(a, b){//타입이 없는 미친 언어
    const sum = a + b;
    return sum;
}

// 함수 호출
//doSmth(add()); //add안에 괄호를 넣어주면 add먼저 실행하여 sum이 출력 Not a number
doSmth(add); //함수 자체를 전달

const addFun = add;
console.log(add);
addFun(1,2);