export const isHappy = (num) => {
  const cache = {};

  while (num !== 1 && !cache[num]) {
    cache[num] = true;
    num = sumOfSquares(num);
  }
  return num === 1 ? true : false;
};

function sumOfSquares(num) {
  return num
    .toString()
    .split("")
    .reduce(function (acc, val) {
      return acc + Math.pow(val, 2);
    }, 0);
}
