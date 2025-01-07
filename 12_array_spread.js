let iveMember = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
];
console.log(iveMember);

// 1. concat() : 새로운 item을 맨 뒤에 삽입
// 원본 수정 X
console.log('1. concat()')
console.log(iveMember.concat('이서'));
console.log(iveMember);

// 2. slice(어디서부터, 어디전까지) : 삭제
// 원본 수정 X
console.log('2. slice()');
console.log(iveMember.slice(0, 2)); // 0, 1 삭제 됨
console.log(iveMember);

// 3. spread operator (...) : 기존 배열을 쫙 펼쳐서 처리
// ive2에 iveMember 배열을 복사
console.log('3. spread operator');
let ive2 = iveMember; // 이런 얕은 복사를 사용하지 않는다.
let ive3 =  [... iveMember]; // 깊은 복사
iveMember.push('이서');
console.log(ive2);
console.log(ive3);

// 4. 클래스 깊은 복사
let jang = {
  name : '장원영',
  age : 22,
};

let 장원영 = {... jang};
jang.age =  25;
console.log(jang);
console.log(장원영);

// 5. join() : 배열 간 자료를 ,(comma)로 구분 후 이어줌
console.log('5. join()')
console.log(iveMember.join('/'));

// 6. 기존 배열에 값을 추가 -- 가을 추가
let newIve = [... iveMember, '가을'];
console.log(newIve);
iveMember = [... newIve];
console.log(iveMember);