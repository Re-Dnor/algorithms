import { searchInsert } from "../search-insert-position.js";
// import { searchInsert } from "../try-search-insert-position.js";

describe("LeetCode 35 task: search insert position", () => {
  test("Найти 1 элемент массива", () => {
    const nums = [2, 7, 11];
    const target = 2;

    expect(searchInsert(nums, target)).toBe(0);
  });

  test("Найти 2 элемент массива", () => {
    const nums = [2, 7, 11];
    const target = 7;

    expect(searchInsert(nums, target)).toBe(1);
  });

  test("Найти 3 элемент массива", () => {
    const nums = [2, 7, 11];
    const target = 11;

    expect(searchInsert(nums, target)).toBe(2);
  });

  test("Промежуточное значение массива", () => {
    const nums = [2, 7, 11, 13, 20, 90];
    const target = 30;

    expect(searchInsert(nums, target)).toBe(5);
  });

  test("Пустой массив", () => {
    const nums = [];
    const target = 10;

    expect(searchInsert(nums, target)).toBe(0);
  });
});
