//number, string, boolean, null, undefined
let num  = 2;
let num2 = num;
console.log(num);
console.log(num2);

num2=3;
console.log(num);
console.log(num2);


//object 주소가 할당, 주소가 복사됨. reference
let obj = {
    name: 'sk',
    age: 24,
};
console.log(obj.name);//sk

let obj2 = obj;
console.log(obj2.name);//sk

obj.name = 'James';
console.log(obj.name);
console.log(obj2.name);

//let 변경 가능
//const 선언 후 변경 불가
//object를 cosnt로 만들어도 변경 가능 : object의 reference는 잠겨있음. 세부 내용은 변경 가능..
//공간은 잠겨서 변경불가하지만 레퍼런스가 가리키고 있는것은 가능..


// 2. 함수 | 함수 정의, 호출, 그리고 콜백함수
// 반복적인 행동 -> 함수로 만듦
function add1(num1,num2){
    return num1 + num2;
}
const sum = add1(3, 4);

//함수도 오브젝트 중 하나

function print(name, age) { //함수의 인자는 의미있는 단어로 작성
    console.log(`${a} ${b}`);
}
print(8, 33);


function surprise(operator){
    const result = operator();
    console.log(result);
}

surprise(add);