import { quickSort } from "../quick-sort";
// import { quickSort } from "../try-quick-sort.js";

describe("Быстрая сортировка", () => {
  test("Сортированный массив", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(quickSort(arr)).toEqual(arr);
  });

  test("Сортированный массив по убыванию", () => {
    const arr = [7, 6, 5, 4, 3, 2, 1];
    const sortedArr = arr.sort((a, b) => a - b);
    expect(quickSort(arr)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const arr = [0, 10, 1, 3, 7, 4, 15, 2, 1];
    const sortedArr = arr.sort((a, b) => a - b);
    expect(quickSort(arr)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    const arr = [];
    expect(quickSort(arr)).toEqual([]);
  });

  test("Один элемент", () => {
    const arr = [1];
    expect(quickSort(arr)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    const arr = [7, 7, 7, 7, 7, 7, 7];
    expect(quickSort(arr)).toEqual(arr);
  });
});
