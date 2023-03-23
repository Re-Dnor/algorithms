import { twoSum } from "../two-sum.js";
// import { twoSum } from "../try-two-sum.js";

describe("LeetCode 1 task: two sum", () => {
  test("Сортированный массив", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(nums, target)).toContain(0);
    expect(twoSum(nums, target)).toContain(1);
  });

  test("Неотсортированный массив", () => {
    const nums = [15, 1, 4, 9, 23, 2, 3, 7];
    const target = 8;

    expect(twoSum(nums, target)).toContain(1);
    expect(twoSum(nums, target)).toContain(7);
  });

  test("Одинаковые элементы", () => {
    const nums = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
    const target = 10;

    expect(twoSum(nums, target)).toContain(0);
    expect(twoSum(nums, target)).toContain(1);
  });

  test("Пустой массив", () => {
    const nums = [];
    const target = 0;

    expect(twoSum(nums, target)).toEqual([-1, -1]);
  });
});
