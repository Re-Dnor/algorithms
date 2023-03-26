import { plusOne } from "../plus-one.js";
// import { plusOne } from "../try-plus-one.js";

describe("Leetcode 66 task: plus one", () => {
  test("Изменение последнего элемента", () => {
    const digits = [1, 2, 3];
    expect(plusOne(digits)).toEqual([1, 2, 4]);
  });

  test("Изменение всех элементов", () => {
    const digits = [9, 9, 9];
    expect(plusOne(digits)).toEqual([1, 0, 0, 0]);
  });

  test("Один элемент", () => {
    const digits = [9];
    expect(plusOne(digits)).toEqual([1, 0]);
  });

  test("Пустой массив", () => {
    const digits = [];
    expect(plusOne(digits)).toEqual([1]);
  });
});
