import { maxSubarray } from "../maximum-subarray.js";
// import { maxSubarray } from "../try-maximum-subarray.js";

describe("Leetcode 53 task: maximum subarray", () => {
  test("Сортированный массив", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(maxSubarray(nums)).toBe(55);
  });

  test("Все отрицательные элементы", () => {
    const nums = [-1, -2, -3, -1, -2, -3];
    expect(maxSubarray(nums)).toBe(-1);
  });

  test("Смешанный массив", () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    expect(maxSubarray(nums)).toBe(6);
  });

  test("Один элемент массива", () => {
    const nums = [10];
    expect(maxSubarray(nums)).toBe(10);
  });

  test("Пустой массив", () => {
    const nums = [];
    expect(maxSubarray(nums)).toBe(-1);
  });
});
