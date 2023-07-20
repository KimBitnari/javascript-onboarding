const MIN_PAGE = 1, MAX_PAGE = 400;
const DRAW = 0, POBI_WIN = 1, CRONG_WIN = 2;

function problem1(pobi, crong) {
  // 예외사항
  if (exception(pobi) || exception(crong)) return -1;

  const pobiMax = Math.max(...[sum(pobi[0]), multi(pobi[0]), sum(pobi[1]), multi(pobi[1])]);
  const crongMax = Math.max(...[sum(crong[0]), multi(crong[0]), sum(crong[1]), multi(crong[1])]);

  if (pobiMax === crongMax) return DRAW;
  else if (pobiMax > crongMax) return POBI_WIN;
  else return CRONG_WIN;
}

function exception(arr) {
  // 시작 면(1)이나 마지막 면(400)이 나오도록 책을 펼치지 않는다.
  if (arr[0] <= MIN_PAGE || arr[1] >= MAX_PAGE) return true;
  // 왼쪽 페이지는 홀수, 오른쪽 페이지는 짝수 번호
  if (arr[0] % 2 != 1 || arr[1] % 2 != 0) return true;
  // 두 페이지 연결
  if (arr[1] != arr[0] + 1) return true;

  return false;
}

function sum(page) {
  let total = 0;

  for (n of page.toString()) {
    total += parseInt(n);
  }

  return total;
}

function multi(page) {
  let total = 1;

  for (n of page.toString()) {
    total *= parseInt(n);
  }

  return total;
}

// console.log(problem1([97, 98], [197, 198]));
// console.log(problem1([131, 132], [211, 212]));
// console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
