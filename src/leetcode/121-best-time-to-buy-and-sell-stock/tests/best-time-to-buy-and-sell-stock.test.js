import { maxProfit } from "../best-time-to-buy-and-sell-stock.js";
// import { maxProfit } from "../try-best-time-to-buy-and-sell-stock.js";

describe("Leetcode 121 task: best time to buy and sell stock", () => {
  test("Возрастающие акции", () => {
    const prices = [1, 2, 3, 4, 5, 6, 7];
    expect(maxProfit(prices)).toBe(6);
  });

  test("Убывающие акции", () => {
    const prices = [7, 6, 5, 4, 3, 1];
    expect(maxProfit(prices)).toBe(0);
  });

  test("Случайные акции", () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toBe(5);
  });

  test("Одна акция", () => {
    const prices = [10];
    expect(maxProfit(prices)).toBe(0);
  });

  test("Нету акций", () => {
    const prices = [];
    expect(maxProfit(prices)).toBe(0);
  });
});
