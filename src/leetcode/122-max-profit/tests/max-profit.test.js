import { maxProfit } from "../max-profit.js";
// import { maxProfit } from "../try-max-profit.js";

describe("Leetcode 122 task: best time to buy and sell stock Stock II", () => {
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
    expect(maxProfit(prices)).toBe(7);
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
