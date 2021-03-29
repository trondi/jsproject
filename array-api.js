// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(','); //구분자 입력
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');// 구분자 필요
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5); // 어디부터, 몇개 -> splice는 원래 배열에서 바꿈. 따라서 slice 사용
    //slice(sttart, end) 배열을 반환함. end는 배제되는 인덱스
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  { //find<-콜백함수로 만들어서 전달 : boolean 타입을 리턴 해야함.

    const reault = students.find(function (student, index){
        //console.log(student, index);
        return student.score === 90;
        console.log(result);
    })

    const result = students.find((student) => student.score === 90);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  { //filter : 콜백함수가 true인 값만 모아서 반환
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  //map 그에 해당되는 값을 가져옴.
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    //some : 무언가 있는지 없는지 확인. 배열에서 하나라도 맞는 조건이 있다면 true. 
    //every : 모든 요소들이 이조건을 충족해야 true
    console.clear();
    const result = students.some((student) => student.score < 50);
    console.log(result);
  
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
  }
  console.clear();
  
  // Q9. compute students' average score
  {
    const r1 = students.reduce((prev, curr) => {
      console.log('----------');
      console.log(prev);
      console.log(curr);
      return curr; //return 의 콜백 함수에는 이전 반환값이 필요함. prev로 순차적으로 전달됨.
    }, 0); //,0이 처음 값을 줌

    //--------------------
    const result = students.reduce((prev, curr) => prev.score + curr.score); //점수값을 누적하여 더함.
    console.log(result / students.length);
  }//reduceRight : 역으로 출력
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
      .map((student) => student.score) //새로운 배열로 변환
      .filter((score) => score >= 50) //조건
      .join(); //string으로 바뀜
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90' 오름차순
  {
    const result = students
      .map((student) => student.score)
      .sort((a, b) => b - a) //큰게 앞으로 나옴
      .join();
    console.log(result);
  }