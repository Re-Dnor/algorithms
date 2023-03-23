import { selectionSort } from "../selection-sort";
import { sortedNums, sortedNumsDescending, unsortedNums, emptyArray, aloneNum, sameNums } from "../../utils/index.js";
// import { selectionSort } from "../try-selection-sort";

describe("Сортировка выбором", () => {
  test("Сортированный массив", () => {
    expect(selectionSort(sortedNums)).toEqual(sortedNums);
  });

  test("Сортированный массив по убыванию", () => {
    const sortedArr = sortedNumsDescending.sort((a, b) => a - b);
    expect(selectionSort(sortedNumsDescending)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const sortedArr = unsortedNums.sort((a, b) => a - b);
    expect(selectionSort(unsortedNums)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    expect(selectionSort(emptyArray)).toEqual([]);
  });

  test("Один элемент", () => {
    expect(selectionSort(aloneNum)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    expect(selectionSort(sameNums)).toEqual(sameNums);
  });
});
