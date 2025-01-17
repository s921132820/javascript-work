// let number = [1,2,3,4,5];

// number.map((x) => {
//   console.log(x);
// })

let data = ['A','B','C']


// map으로 루프 돌릴 수 있음
function mapTest() {
  data.map((x, index) => {
    console.log(index, ' : ', x);
    return(console.log('a'));
  })
}

mapTest();
