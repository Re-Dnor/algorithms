import { containsDuplicate } from "../contains-duplicate.js";
// import { containsDuplicate } from "../try-contains-duplicate.js";

describe("Leetcode 217 task: contains duplicate", () => {
  test("Массив с дубликатами", () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBeTruthy();
  });

  test("Массив без дубликатов", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(containsDuplicate(nums)).toBeFalsy();
  });

  test("Пустой массив", () => {
    const nums = [];
    expect(containsDuplicate(nums)).toBeFalsy();
  });
});
