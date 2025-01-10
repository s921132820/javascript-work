// 문제 6. 평균은 넘겠지?
// - 문제
// 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 
// 당신은 그들에게 슬픈 진실을 알려줘야 한다.

// - 입력
// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 
// 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 
// 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// - 출력
// 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 
// 소수점 셋째 자리까지 출력한다. 

// - 예제 입력 1 
// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91

// - 예제 출력 1 
// 40.000%
// 57.143%
// 33.333%
// 66.667%
// 55.556%

let fs = require('fs');

let input = fs.readFileSync('./data/6_exam.txt')
.toString().split('\n');

// let newArray = input.map(item => item.trim().split(' ').map(Number));

// let percentages = newArray.map(arr => {
//   let sum = arr.reduce((acc, num) => acc + num, 0);  // 배열의 합
//   let average = sum / arr.length;  // 평균 계산
//   console.log(average.toFixed(3));  // 소수점 셋째 자리까지 출력
// });
// percentages.forEach(p => console.log(`${p}%`));

// 전체 시료개수
let n = parseInt(input[0]);
console.log(n);

for(let i=1; i <= n; i++) {
  let data = input[i].split(' ').map(Number);
  console.log(data);
  let m = data[0];
  let sum = 0;;
  for (let j=0; j < m; j++) {
    sum += data[j];
  }
  //총점계산
  console.log(sum);

  //평균계산
  let avg = sum / m;
  console.log(avg);

  // 평균보다 큰 값의 수 저장 변수
  let cnt;
  for(let k = 1; k < n; k++) {
    if(data[k] > avg) cnt += 1;
  }
  // 평균 이상자 수의 비율
  let rate = (cnt / n)
  console.log(rate);
}
