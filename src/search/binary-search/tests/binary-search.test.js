import { binarySearch } from "../binary-search.js";
import { sortedNumbers, bigSortedNumbers, missingNumber, aloneNumber, emptyArray } from "../../utils/index.js";
// import { binarySearch } from "../try-binary-search.js";

describe("Бинарный поиск", () => {
  test("Отсортированный массив", () => {
    const target = 10;
    expect(binarySearch(sortedNumbers, target)).toEqual(9);
  });

  test("Отсортированный c 10к элементов", () => {
    const target = 10000;
    expect(binarySearch(bigSortedNumbers, target)).toEqual(9999);
  });

  test("Отсутсвует target", () => {
    const target = 4;
    expect(binarySearch(missingNumber, target)).toEqual(3);
  });

  test("Один элемент", () => {
    const target = 1;
    expect(binarySearch(aloneNumber, target)).toEqual(0);
  });

  test("Пустой массив", () => {
    const target = 77;
    expect(binarySearch(emptyArray, target)).toEqual(0);
  });
});
