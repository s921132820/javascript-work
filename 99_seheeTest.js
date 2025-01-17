
let arr = [0, 1, 2, 4, 3];
let queries = [[0, 4, 2],[0, 3, 2],[0, 2, 2]];

	

for(let query of queries) {
  let i = query[0];
  let j = query[1];
  

  [arr[i], arr[j]]  = [arr[j], arr[i]]
}
  return arr;
