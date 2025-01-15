// const order = new Promise((sucess, fail) => {
//   // 여기에 콜백함수를 적음
// })


// setTimeout(실행할 함수, 몇초후);
// 1000은 1초, 2000은 2초를 의미
const myPromise = new Promise((resolve, reject) => {
  // 실행할 비동기 처리
  setTimeout(() => {
    alert('2초 지남');
    // 실행할 함수
    const text = prompt('👍따봉을 입력해줘! 선물줄게!');
    if(text == '따봉') {
      resolve('👍');
    } else {
      reject('따봉이 아니잖아~');
    }
  }, 2000)
});

myPromise
  // 성공시 실행
  // .then((resolve), .catch((reject) resolve나 reject 대신 다른 단어를 떠도 됨
  // thendms resolve를 받음
  .then((result) => {
    console.log("Promise 결과 : " + result);
  })
  // 실패시 실행
  // catch는 reject를 받음
  .catch((reject) => {
    console.log("Promise 결과 : " + reject);
  })
  // 성공 실패 관계없이 모두 실행
  .finally(() => {
    console.log("Finally는 무조건 실행됨");
  })