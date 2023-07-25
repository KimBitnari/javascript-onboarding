function problem5(money) {
  const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [];
  let m = money;

  for (let i = 0; i < moneyType.length; i++) {
    const div = parseInt(m / moneyType[i]);
    m %= moneyType[i];
    result.push(div);
  }

  return result;
}

// console.log(problem5(50237));
// console.log(problem5(15000));

module.exports = problem5;
