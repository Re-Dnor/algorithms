export const maxProfit = (prices) => {
  let max = 0;
  let min = prices[0];

  for (let num of prices) {
    max = Math.max(max, num - min);
    min = Math.min(min, num);
  }

  return max;
};
