import { quickSort } from "../quick-sort";
import { sortedNums, sortedNumsDescending, unsortedNums, emptyArray, aloneNum, sameNums } from "../../utils/index.js";
// import { quickSort } from "../try-quick-sort.js";

describe("Быстрая сортировка", () => {
  test("Сортированный массив", () => {
    expect(quickSort(sortedNums)).toEqual(sortedNums);
  });

  test("Сортированный массив по убыванию", () => {
    const sortedArr = sortedNumsDescending.sort((a, b) => a - b);
    expect(quickSort(sortedNumsDescending)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const sortedArr = unsortedNums.sort((a, b) => a - b);
    expect(quickSort(unsortedNums)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    expect(quickSort(emptyArray)).toEqual([]);
  });

  test("Один элемент", () => {
    expect(quickSort(aloneNum)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    expect(quickSort(sameNums)).toEqual(sameNums);
  });
});
