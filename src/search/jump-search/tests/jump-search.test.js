import { jumpSearch } from "../jump-search.js";
// import { jumpSearch } from "../try-jump-search.js";
import { sortedNumbers, bigSortedNumbers, missingNumber, aloneNumber, emptyArray } from "../../utils/index.js";

describe("Поиск прыжками", () => {
  test("Отсортированный массив", () => {
    const target = 10;
    expect(jumpSearch(sortedNumbers, target)).toBe(9);
  });

  test("Отсортированный c 10к элементов", () => {
    const target = 10000;
    expect(jumpSearch(bigSortedNumbers, target)).toEqual(9999);
  });

  test("Отсутсвует target", () => {
    const target = 4;
    expect(jumpSearch(missingNumber, target)).toEqual(-1);
  });

  test("Один элемент", () => {
    const target = 1;
    expect(jumpSearch(aloneNumber, target)).toEqual(0);
  });

  test("Пустой массив", () => {
    const target = 77;
    expect(jumpSearch(emptyArray, target)).toEqual(-1);
  });
});
