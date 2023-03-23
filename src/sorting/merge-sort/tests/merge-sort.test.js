import { mergeSort } from "../merge-sort.js";
import { sortedNums, sortedNumsDescending, unsortedNums, emptyArray, aloneNum, sameNums } from "../../utils/index.js";
// import { mergeSort } from "../try-merge-sort.js";

describe("Сортировка слиянием", () => {
  test("Сортированный массив", () => {
    expect(mergeSort(sortedNums)).toEqual(sortedNums);
  });

  test("Сортированный массив по убыванию", () => {
    const sortedArr = sortedNumsDescending.sort((a, b) => a - b);
    expect(mergeSort(sortedNumsDescending)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const sortedArr = unsortedNums.sort((a, b) => a - b);
    expect(mergeSort(unsortedNums)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    expect(mergeSort(emptyArray)).toEqual([]);
  });

  test("Один элемент", () => {
    expect(mergeSort(aloneNum)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    expect(mergeSort(sameNums)).toEqual(sameNums);
  });
});
