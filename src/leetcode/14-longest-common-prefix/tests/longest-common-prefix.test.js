import { longestCommonPrefix } from "../longest-common-prefix.js";
// import { longestCommonPrefix } from "../try-longest-common-prefix.js";

describe("Leetcode 14 task: longest common prefix", () => {
  test("Есть слова с одним префиксом", () => {
    const array = ["flower", "flow", "flight"];
    expect(longestCommonPrefix(array)).toBe("fl");
  });

  test("Нету слов с префиксом", () => {
    const array = ["dog", "racecar", "car"];
    expect(longestCommonPrefix(array)).toBe("");
  });

  test("Пустой массив", () => {
    const array = [];
    expect(longestCommonPrefix(array)).toBe("");
  });

  test("Одинаковые слова", () => {
    const array = ["prefix", "prefix", "prefix", "prefix", "prefix"];
    expect(longestCommonPrefix(array)).toBe("prefix");
  });
});
