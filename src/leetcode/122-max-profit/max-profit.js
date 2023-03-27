export const maxProfit = (prices) => {
  let [current, next, diff, sum] = [0, 0, 0, 0];

  for (let i = 0; i < prices.length - 1; i++) {
    current = prices[i];
    next = prices[i + 1];
    diff = next - current;
    if (diff > 0) {
      sum += diff;
    }
  }
  return sum;
};
