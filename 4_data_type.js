/**
 * Number
 * String
 * Boolean
 * undefined
 * null
 * Symbol
 * Object(Fuction, Array, Object) : 객체 타입 -> 제일 중요
 */

// Number 
const age = 20;
const pi = 3.141592;
console.log(typeof age);
console.log(typeof pi);

// String
const myTest = '코딩테스트';
console.log(myTest);
// Escape Character
const iveYijin = '아이브 \n \t안유진';
console.log(iveYijin);

// Template Literal에서 백틱(`) -> ${변수명}
const groupName = '아이브';
let idolName = '장원영';
console.log(groupName + '장원영');
console.log(`우리의 주인공은 ${groupName}
  그룹의 ${idolName}입니다
  환영해주세요`);