import { isValid } from "../valid-parentheses.js";
// import { isValid } from "../try-valid-parentheses.js";

describe("Leetcode 20 task: valid parentheses", () => {
  test("Валидная пара", () => {
    const str = "()";
    expect(isValid(str)).toBeTruthy();
  });

  test("Не валидная пара", () => {
    const str = "(}";
    expect(isValid(str)).toBeFalsy();
  });

  test("Несколько пар скобок", () => {
    const str = "()[]{}";
    expect(isValid(str)).toBeTruthy();
  });

  test("Вложенные скобки", () => {
    const str = "([{()}])";
    expect(isValid(str)).toBeTruthy();
  });

  test("Пустая строка", () => {
    const str = "";
    expect(isValid(str)).toBeTruthy();
  });
});
