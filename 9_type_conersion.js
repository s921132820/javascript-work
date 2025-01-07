// 1) 명시적 형변환
let age = 22;
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 2) 암묵적 형변화
let test = age + ''; // 숫자 + 문자 --> 문자
console.log(typeof test, test);


// 정리
// 숫자 -> 문자 : toString()
// 문자 -> 숫자 : parseInt(), parseFloat()

let number = (123.99).toString;
console.log(typeof parseFloat(number), parseInt(number));
// 출력 : number NaN -> Not a Number

let num = 123.998;
// console.log(num);
console.log(`num = ${num}`);