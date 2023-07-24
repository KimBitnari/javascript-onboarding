function problem3(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i.toString().split('').filter((item) => ['3', '6', '9'].includes(item)).length;
  }

  return sum;
}

// console.log(problem3(13));
// console.log(problem3(33))

module.exports = problem3;
