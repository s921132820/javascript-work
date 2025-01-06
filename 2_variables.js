/**
 * 변수의 사용
 * 1. var : 더 이상 사용하지 않는다.
 * 2. let : 변수 선언
 * 3. const : 상수 선언
 */

var name = '김형민';
var age = 22;
console.log(age);

let ive = '아이브';
console.log(ive);

let girlGroup;
console.log(girlGroup);
//undefined : 선언은 되었으나 값이 할당되지 않은 상태

const newJeans = '뉴진스';
// 상수는 반드시 값이 할당되어야 하는 아이
console.log(newJeans);
newJeans = '뉴우진스';
// 한번 설정하면 값을 바꿀 수가 없음
