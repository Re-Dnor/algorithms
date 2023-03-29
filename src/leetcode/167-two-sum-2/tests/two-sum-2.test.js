import { twoSum } from "../two-sum-2.js";
// import { twoSum } from "../try-two-sum-2.js";

describe("Leetcode 167 task: two sum", () => {
  test("Тест 1", () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  test("Тест 2", () => {
    const numbers = [2, 3, 4];
    const target = 6;
    expect(twoSum(numbers, target)).toEqual([1, 3]);
  });

  test("Тест 3", () => {
    const numbers = [-1, 0];
    const target = -1;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  test("Тест 4", () => {
    const numbers = [-1, 0];
    const target = 10;
    expect(twoSum(numbers, target)).toEqual([]);
  });
});
