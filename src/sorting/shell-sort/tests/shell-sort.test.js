import { shellSort } from "../shell-sort.js";
// import { shellSort } from "../try-shell-sort.js";

describe("Сортировка Шелла", () => {
  test("Сортированный массив", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(shellSort(arr)).toEqual(arr);
  });

  test("Сортированный массив по убыванию", () => {
    const arr = [7, 6, 5, 4, 3, 2, 1];
    const sortedArr = arr.sort((a, b) => a - b);
    expect(shellSort(arr)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const arr = [0, 10, 1, 3, 7, 4, 15, 2, 1];
    const sortedArr = arr.sort((a, b) => a - b);
    expect(shellSort(arr)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    const arr = [];
    expect(shellSort(arr)).toEqual([]);
  });

  test("Один элемент", () => {
    const arr = [1];
    expect(shellSort(arr)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    const arr = [7, 7, 7, 7, 7, 7, 7];
    expect(shellSort(arr)).toEqual(arr);
  });
});
