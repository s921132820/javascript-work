// 문제 5. 최댓값과 인덱스찾기

// - 문제
// 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 
// 수인지를 구하는 프로그램을 작성하시오.

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.


// - 출력
// 첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.

// - 예제 출력 1 
// 85
// 8

let fs = require('fs');

let input = fs.readFileSync('./data/5_exam.txt')
.toString().split('\n').map(Number);

// console.log(input);

// let valueMax = Math.max(...input);
// let findIndex =  input.findIndex(value => value === valueMax);
// console.log(valueMax);
// console.log(findIndex + 1);

let data = input.map(Number);
console.log(data);

let max = data.reduce((x, y) => Math.max(x, y));
console.log(max);
console.log(data.indexOf(max) + 1);