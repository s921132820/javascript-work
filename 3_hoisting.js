// 변수 호이스팅
// 모든 선언된 변수가 최상단으로 이동된 것 같은 현상
// 변수 선언 후 -- 할당 개발 환경 만들기 위해 --> var 쓰지 말자
console.log(kim);
var kim = '장원영';
console.log(kim);

console.log(lee);
let lee = '이순신';

// var는 변수 선언을 나중에 해도 오류가 안생김
// let은 변수 선언하고 나서 쓸 수 있기 때문에 오류가 남