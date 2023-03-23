import { shellSort } from "../shell-sort.js";
import { sortedNums, sortedNumsDescending, unsortedNums, emptyArray, aloneNum, sameNums } from "../../utils/index.js";
// import { shellSort } from "../try-shell-sort.js";

describe("Сортировка Шелла", () => {
  test("Сортированный массив", () => {
    expect(shellSort(sortedNums)).toEqual(sortedNums);
  });

  test("Сортированный массив по убыванию", () => {
    const sortedArr = sortedNumsDescending.sort((a, b) => a - b);
    expect(shellSort(sortedNumsDescending)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const sortedArr = unsortedNums.sort((a, b) => a - b);
    expect(shellSort(unsortedNums)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    expect(shellSort(emptyArray)).toEqual([]);
  });

  test("Один элемент", () => {
    expect(shellSort(aloneNum)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    expect(shellSort(sameNums)).toEqual(sameNums);
  });
});
