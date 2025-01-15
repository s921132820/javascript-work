// 서버에 정보를 요청하는 비동기 함수
// fetch 함수는 자바스크립트에서 지원하는 함수
// 같은 기능을 하는 함수 -> ajax
// ajax : jQuery에서 지원하는 함수
// axios : Vue, React에서 사용하는 패키지
fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
// .then(response => response.json())
  .then((data) => {
    // json 형식을 JS의 오브젝트 타입으로 변환
    return data.json();
  })
  .then((x) => {
    return x.filter((x) => x.id >= 5);
  })
  .then((data) => {
    // html 찍어주기
    let id = document.querySelector('#id');
    let title = document.querySelector('#title');
    console.log(data);
    id.innerHTML = data[0].id;
    title.innerHTML = data[0].title;
  })
  .catch((error) => {
    console.log('요청한 주소가 이상한데?');
  })