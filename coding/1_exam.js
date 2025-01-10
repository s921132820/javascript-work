let fs = require('fs');

let input = fs.readFileSync('./data/1_exam.txt')
.toString().split('\n');
input = input[0].split(' ').map(Number);
console.log(input);

// 첫째 줄에 A+B를 출력한다.

console.log(input.reduce((x, y) => x + y));

