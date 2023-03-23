import { insertionSort } from "../insertion-sort.js";
import { sortedNums, sortedNumsDescending, unsortedNums, emptyArray, aloneNum, sameNums } from "../../utils/index.js";
// import { insertionSort } from "../try-insertion-sort.js";

describe("Сортировка вставками", () => {
  test("Сортированный массив", () => {
    expect(insertionSort(sortedNums)).toEqual(sortedNums);
  });

  test("Сортированный массив по убыванию", () => {
    const sortedArr = sortedNumsDescending.sort((a, b) => a - b);
    expect(insertionSort(sortedNumsDescending)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const sortedArr = unsortedNums.sort((a, b) => a - b);
    expect(insertionSort(unsortedNums)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    expect(insertionSort(emptyArray)).toEqual([]);
  });

  test("Один элемент", () => {
    expect(insertionSort(aloneNum)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    expect(insertionSort(sameNums)).toEqual(sameNums);
  });
});
