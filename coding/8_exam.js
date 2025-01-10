// 문자열 S를 입력받은 후에, 
// 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 
// 작성하시오. 
// 즉, 
// 첫 번째 문자를 R번 반복하고, 
// 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다.

// - 입력
// 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 
// 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 
// 문자열 S가 공백으로 구분되어 주어진다. 
// S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 

// - 출력
// 각 테스트 케이스에 대해 P를 출력한다.

// - 예제 입력 1 
// 2
// 3 ABC
// 5 /HTP

// - 예제 출력 1 
// AAABBBCCC
// /////HHHHHTTTTTPPPPP

let fs = require('fs');

let input = fs.readFileSync('./data/8_exam.txt')
.toString().split('\n');
// console.log(input);

// abc 반복출력

let inputA = input[1].split(' ');
console.log('inputA : ' + inputA);

let abc = inputA[1].split('');
console.log('abc : ' + abc);

let inputAbc = abc.map(x => x.repeat(inputA[0])).join('');
console.log(inputAbc); 

// /HTP 반복출력

let inputB = input[2].split(' ');
console.log('inputB : ' + inputB);

let htp = inputB[1].split('')
console.log('htp : ' + htp);

let inputHtp = htp.map(x => x.repeat(inputB[0])).join('');
console.log(inputHtp);

