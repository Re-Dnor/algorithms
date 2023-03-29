import { singleNumber } from "../single-number.js";
// import { singleNumber } from "../try-single-number.js";

describe("Leetcode 136 task: single number", () => {
  test("Небольшой массив", () => {
    const nums = [2, 2, 1];
    expect(singleNumber(nums)).toBe(1);
  });

  test("Массив с 10к элементами", () => {
    const nums = new Array(10000).fill(3);
    nums.push(7);
    expect(singleNumber(nums)).toBe(7);
  });

  test("С 1 элементом", () => {
    const nums = [10];
    expect(singleNumber(nums)).toBe(10);
  });
});
