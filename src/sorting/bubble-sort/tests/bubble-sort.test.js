import { bubbleSort } from "../bubble-sort.js";
import { sortedNums, sortedNumsDescending, unsortedNums, emptyArray, aloneNum, sameNums } from "../../utils/index.js";
// import { bubbleSort } from "../try-bubble-sort.js";

describe("Пузырьковая сортировка", () => {
  test("Сортированный массив", () => {
    expect(bubbleSort(sortedNums)).toEqual(sortedNums);
  });

  test("Сортированный массив по убыванию", () => {
    const sortedArr = sortedNumsDescending.sort((a, b) => a - b);
    expect(bubbleSort(sortedNumsDescending)).toEqual(sortedArr);
  });

  test("Неотсортированный массив", () => {
    const sortedArr = unsortedNums.sort((a, b) => a - b);
    expect(bubbleSort(unsortedNums)).toEqual(sortedArr);
  });

  test("Пустой массив", () => {
    expect(bubbleSort(emptyArray)).toEqual([]);
  });

  test("Один элемент", () => {
    expect(bubbleSort(aloneNum)).toEqual([1]);
  });

  test("Одинаковые элементы массива", () => {
    expect(bubbleSort(sameNums)).toEqual(sameNums);
  });
});
