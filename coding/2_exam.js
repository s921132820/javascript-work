let fs = require('fs');

let input = fs.readFileSync('./data/2_exam.txt')
.toString().split('\n').map(Number);
console.log(input);

let data = input[0].map(Number);


// input2 = input[1].toString().split('');
// input2 = input2.map(Number);
// console.log(input);
// console.log(input2);

// let value = 0;
// let multiplier = 1;

// for (let i = input2.length - 1; i >= 0; i--) {
//   let partial = input[0] * input2[i];
//   console.log(partial);
//   value += (partial * multiplier);
//   multiplier *= 10;
// }

// console.log(value);