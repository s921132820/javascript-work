// destructuring : 비구조화, 파괴
// 배열을 분해 -> 다른 변수에 넣는 방법

let data = [1, 2];
let a = data[0];
let b = data[1];

// 배열을 이렇게 한방에 해결
let [x, y] = [1, 2];

console.log(x);

let [value, setValue] = 
[
  1, 
  (v)=>{value = v}
];
console.log("value : "  , value);
setValue(10)
console.log("value : "  , value);

let [idol, setIdol] = [
  { name : '장원영', age : 10},
  (change) => {
    idol = {...change}
  }
]

console.log(idol);
let newIdol = { name : '안유진', age : 22};
setIdol(newIdol);
console.log(idol);

let [arr, setArr] = [
  ['김씨', '이씨', '박씨'],
  (newArr) => {
    arr = [...newArr];
  }
]

console.log(arr[0]);
// 뒤에 '최씨' 추가하기
// 1. 원본과 같은 복사본 만들기
// 2. 복사본에 추가하기
// 3. 원본에 덮어쓰기(함수로)

let copyArr = [...arr];
copyArr.push('최씨');
setArr(copyArr);
console.log(arr);