// - 문제
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 
// 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 
// 프로그램을 작성하시오.

// - 입력
// 첫째 줄에 시험 점수가 주어진다. 
// 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// - 출력
// 시험 성적을 출력한다.

// - 예제 입력
// 100

// - 예제 출력
// A


let fs = require('fs');

let input = fs.readFileSync('./data/3_exam.txt')
.toString().split('\n').map(Number);

console.log(input);

if (input >= 90) {
  console.log('A');
} else if (input <= 89 && input >= 80) {
  console.log('B');
} else if (input <= 79 && input >= 70) {
  console.log('C');
} else if (input <= 69 && input >= 60) {
  console.log('D');
} else {
  console.log('F');
}

