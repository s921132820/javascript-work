// 산술연산자
console.log(10 + 10);
console.log(7 % 3); // 나머지 구하기

// 증감연산자
console.log('== 증감연산자');
let number = 1;
number ++;
console.log(number);

// 간단 타입변환
console.log('== 간단 타입변환');
let sample = '99';
console.log(typeof sample); // 출력 : string
console.log(+sample);
console.log(typeof +sample); // 출력 : number

// 비교연산자
console.log('== 비교연산자 : 값만 비교');
console.log(3 == 3); // 출력 : true
console.log(3 == '3'); // 출력 : ture

console.log('=== 비교연산자 : 값과 타입을 같이 비교');
console.log(3 === 3); // 출력 : true
console.log(3 === '3'); //출력 : false

// 삼항연산자
console.log('== 삼항연산자');
console.log(10 > 0 ? '10은 0보다 크다.' : '그렇지 않다.'); // 참이면 앞에거, 거짓이면 뒤에거 출력


// 논리연산자( and : &&. or : || )

// 단축평가 - 많이 씀
console.log('-----------------------------------');
console.log(true || '아이브'); // 출력:true, (or는 하나만 true이면 되는데 앞이 true여서 뒤에거 보지도 않고 true 출력)
console.log(false || '아이브'); // 출력:아이브

console.log('-----------------------------------');
console.log(false && '뉴진스'); // 출력:false
console.log(true && '뉴진스'); // 출력:뉴진스

console.log(true && true && '아일릿'); // 출력:아일릿
console.log(true && false && '아일릿'); // 출력:false

console.log('-----------------------------------');
let name;
console.log(name);

name = name ?? '김형민'; // ??는 값이 null이거나 undefined이면 다음거 출력해줌
console.log(name);

name = 0 && '아이브'; // '',0, null, undefined는 false로 봄, 그 외는 true로
console.log(name);

// 스크립트에서 false로 보는 아이들
// 공백(''), false, null, 0, undefined