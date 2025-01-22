let data = ['apple', 'mango', 'banana'];
let result = data.find((x) => {
  return x == 'mango'
})

console.log(result)

// user테트스

let users = [];
let user1 = {
  name : 'kim',
  age :20,
}
let user2 = {
  name : 'lee',
  age :25,
}

let temp = [...users];
temp.push(user1);
users = [...temp];
console.log(users);

temp = [...users];
temp.push(user2);
users = [...temp];
console.log(users);