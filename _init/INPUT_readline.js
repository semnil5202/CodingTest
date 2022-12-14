// 하나의 값을 입력받을 때
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  console.log(line); // 입력 받은 값 출력
  // 코드 작성

  rl.close();
}).on("close", function () {
  process.exit();
});

// 여러줄의 값들을 입력받을 때
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(input); // 입력 받은 값 출력
  // 코드 작성

  process.exit();
});
