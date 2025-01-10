// 숫자의 정렬
// - 배열에 포함된 데이터를 정렬하는 sort() 함수를 제공
// - 최악의 경우 시간복잡도 O(NlogN)을 보장

// ※ 두 개의 원소 a, b를 입력 받은 경우
// ⓐ 반환값이 0 보다 작은 경우 -> a가 우선순위가 높아, 앞에 위치
// ⓑ 반환값이 0 보다 큰 경우 -> b가 우선순위가 높아, 앞에 위치
// ⓒ 반환 값이 0 인 경우 -> 순서 변화 없음.
// ⓓ 위의 비교를 사용하지 않으면 문자열 처리가 된다.

let fs = require('fs');
input = fs.readFileSync('./data/1_sort_exam.txt').toString().split('\n');
let data = input[0].split(' ').map(Number);
console.log('source = ' + data);

data.sort((a, b)=> a-b);
console.log('result(asc) = ' + data);

data.sort((a, b)=> b-a);
console.log('result(desc) = ' + data);