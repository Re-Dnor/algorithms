import { interpolationSearch } from "../interpolation-search.js";
// import { interpolationSearch } from "../try-interpolation-search.js";
import { sortedNumbers, bigSortedNumbers, missingNumber, aloneNumber, emptyArray } from "../../utils/index.js";

describe("Поиск прыжками", () => {
  test("Отсортированный массив", () => {
    const target = 10;
    expect(interpolationSearch(sortedNumbers, target)).toBe(9);
  });

  test("Отсортированный c 10к элементов", () => {
    const target = 10000;
    expect(interpolationSearch(bigSortedNumbers, target)).toEqual(9999);
  });

  test("Отсутсвует target", () => {
    const target = 4;
    expect(interpolationSearch(missingNumber, target)).toEqual(-1);
  });

  test("Один элемент", () => {
    const target = 1;
    expect(interpolationSearch(aloneNumber, target)).toEqual(0);
  });

  test("Пустой массив", () => {
    const target = 77;
    expect(interpolationSearch(emptyArray, target)).toEqual(-1);
  });
});
