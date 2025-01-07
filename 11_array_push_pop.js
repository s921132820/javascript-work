let iveMember = [
  '안유진',
  '장원영',
  '레이',
  '리즈',
];
console.log(iveMember);

// 1. push() : Array 맨 끝에 새로운 데이터 추가
iveMember.push('가을');
console.log(iveMember);
console.log('전체 아이돌 수 :' + iveMember.length);

// 2. pop() : Array의 맨 마지막 item 반환 --> 삭제
console.log(iveMember.pop());
console.log(iveMember); 

// 3. unshift() : 맨 앞에 데이터를 추가
iveMember.unshift('이서');
console.log(iveMember);

// 4. shift() : 맨 앞에 데이터 삭제
iveMember.shift();
console.log(iveMember);

// 5. 중간 삽입 없음

// 6. splice(어디서부터, 몇개를) : 중간 데이터 삭제
iveMember.splice(1, 1);
console.log(iveMember);

// 7. concat(concaternate - 붙이다)