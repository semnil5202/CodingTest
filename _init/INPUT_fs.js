// 하나의 값을 입력받을 때
let i = require("fs").readFileSync("./INPUT.txt").toString().trim();

// 공백으로 구분된 한 줄의 값들을 입력받을 때
let i = require("fs").readFileSync("./INPUT.txt").toString().trim().split(" ");

// 여러 줄의 값들을 입력받을 때
let i = require("fs").readFileSync("./INPUT.txt").toString().trim().split("\n");

// 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
let [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split(/\s/);

// 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
let [n, ...arr] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

// 하나의 값 또는 공백으로 구분된 여러 값들을 여러 줄에 걸쳐 뒤죽박죽 섞여서 입력받을 때
// ex) n 입력 - 공백으로 구분된 n개의 값 입력 - m 입력 - 여러 줄에 걸쳐 m개의 값 입력
let i = require("fs").readFileSync("./INPUT.txt").toString().trim().split(/\s/);
const n = i[0];
const n_arr = i.slice(1, n + 1);
const [m, ...m_arr] = i.slice(n + 1);
