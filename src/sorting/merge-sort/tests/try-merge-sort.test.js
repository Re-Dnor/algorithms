import { mergeSort } from "../twy-merge-sort.js";

describe("Пузырьковая сортировка", () => {
  test("Сортированный массив", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(mergeSort(arr)).toEqual(arr);
  });

  test("Неотсортированный массив", () => {
    const arr = [0, 10, 1, 3, 7, 4, 15, 2, 1];
    const sortedArr = arr.sort((a, b) => a - b);
    expect(mergeSort(arr)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    const arr = [];
    expect(mergeSort(arr)).toEqual([]);
  });

  test("Один элемент", () => {
    const arr = [1];
    expect(mergeSort(arr)).toEqual([1]);
  });
});
