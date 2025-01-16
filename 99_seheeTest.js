
let numlog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];


function solution(numLog) {
  let result = '';

for (let i = 1; i < numLog.length; i++) {
  const diff = numLog[i] - numLog[i - 1];
  if (diff === 1) {
    result += 'w'; // 1을 더한 경우
  } else if (diff === -1) {
    result += 's'; // 1을 뺀 경우
  } else if (diff === 10) {
    result += 'd'; // 10을 더한 경우
  } else if (diff === -10) {
    result += 'a'; // 10을 뺀 경우
  }
}

return result;
}
solution();