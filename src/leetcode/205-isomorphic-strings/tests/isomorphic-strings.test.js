import { isIsomorphic } from "../isomorphic-strings.js";
// import { isIsomorphic } from "../try-isomorphic-strings.js";

describe("Leetcode 205 task: isomorphic strings", () => {
  test("Тест 1", () => {
    const s = "egg";
    const t = "add";
    expect(isIsomorphic(s, t)).toBeTruthy();
  });

  test("Тест 2", () => {
    const s = "foo";
    const t = "bar";
    expect(isIsomorphic(s, t)).toBeFalsy();
  });

  test("Тест 3", () => {
    const s = "paper";
    const t = "title";
    expect(isIsomorphic(s, t)).toBeTruthy();
  });

  test("Тест 4", () => {
    const s = "";
    const t = "title";
    expect(isIsomorphic(s, t)).toBeFalsy();
  });

  test("Тест 5", () => {
    const s = "";
    const t = "";
    expect(isIsomorphic(s, t)).toBeTruthy();
  });
});
