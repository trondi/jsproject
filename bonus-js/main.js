//number, string, boolean, null, undefined
let num_  = 2;
let num2 = num_;
console.log(num_);
console.log(num2);

num2=3;
console.log(num_);
console.log(num2);


//object 주소가 할당, 주소가 복사됨. reference
let obj_ = {
    name: 'sk',
    age: 24,
};
console.log(obj_.name);//sk

let obj2 = obj_;
console.log(obj2.name);//sk

obj_.name = 'James';
console.log(obj_.name);
console.log(obj2.name);

//let 변경 가능
//const 선언 후 변경 불가
//object를 cosnt로 만들어도 변경 가능 : object의 reference는 잠겨있음. 세부 내용은 변경 가능..
//공간은 잠겨서 변경불가하지만 레퍼런스가 가리키고 있는것은 가능..


//------------------ 2. 함수 | 함수 정의, 호출, 그리고 콜백함수
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

//--------------------------------
function add(num1,num2){
    return num1 + num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function surprise(operator){//add의 ref가 전달, operator = callback으로 바꿀 수 있음
    const result = operator(2, 3);
    console.log(result);//add(2,3)를 수행하는 것과 동일
}

//surprise(add);
surprise(divide);


//------------------ 3. 연산자 | boolean의 모든것 && 연산자
//false: 0, -0, '', null, undefined
//true: -1, 'hello', [](배열은 object이기 때문에 true)
let obj = {
    name:'sk'
}; //f: undefined
if(obj){
    console.log(obj.name)
}/* else{
    console.log('f')
}*/
obj && console.log(obj,name); // false /&& obj에 대한 조건문, obj.name: 유효하지 않는 코드. 한줄로 나타낼 수 있음

//------------------ 4. 클래스 | 클래스 예제와 콜백 함수 최종 정리
class Counter {
    constructor(runEveryFiveTimes)
    {//생성자.. constructor도 함수이기 때문에 인자로 받아옴
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if (this.counter % 5 === 0){
            this.callback && this.callback(this.counter);
            /*if(this.callback){
                this.callback(this.counter);
            }*/
        }
    }
}
function printSomething(num){
    console.log(`yo! ${num}`);
}
function alertNum(num){
    alert(`wow! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();

alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();