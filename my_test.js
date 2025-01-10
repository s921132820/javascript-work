// 2. 문자의 정렬
// - 기본 오름차순 정렬은 내부 함수 없이 가능
// - 내림차순  정렬은 함수 명기 필요

let data = ['fineapple', 'durian', 'carrot', 'banana', 'apple'];
console.log('source = ' + data);
data.sort();
console.log('result(asc) = ' + data);

data.sort(compare);
console.log('result(desc) = ' + data);

function compare(a,b){
    if(a>b) return -1;
    if(a<b) return 1;
    else return 0;
}

// 3. 대소문자 무관하게 비교하기(toUpperCase)
// -- 위의 자료에서 carrot을 Carrot로 바꾸면 정렬 안됨.. 대문자 나중에
// - 모든 문자를 아예 대문자로 변환비교 처리 해야 함.

function compare(a,b){
  let upperA = a.toUpperCase();
  let upperB = b.toUpperCase();
  if(upperA>upperB) return -1;
  if(upperA<upperB) return 1;
  else return 0;
}

// 4. 객체 비교하기

let dataScore = [
  {name: '홍길동', score : 90},
  {name: '김철수', score : 85},
  {name: '박영희', score : 99},
];
console.log(dataScore);
// 성적 오름차순 정렬하기(즉, 성적 순...)
dataScore.sort((a,b) => (b.score - a.score));

function compare(a, b){
  return b.score - a.score;
}
console.log(dataScore);