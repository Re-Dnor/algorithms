import { factorial, reqFactorial, cachedFactorial } from "../factorial.js";
// import { factorial, reqFactorial, cachedFactorial } from "../try-factorial.js";

describe("Факториал", () => {
  test("Тест 1", () => {
    const num = 4;
    expect(factorial(num)).toBe(24);
  });

  test("Тест 2", () => {
    const num = 5;
    expect(factorial(num)).toBe(120);
  });

  test("Тест 3", () => {
    const num = 6;
    expect(factorial(num)).toBe(720);
  });
});

describe("Рекурсивный факториал", () => {
  test("Тест 1", () => {
    const num = 4;
    expect(reqFactorial(num)).toBe(24);
  });

  test("Тест 2", () => {
    const num = 5;
    expect(reqFactorial(num)).toBe(120);
  });

  test("Тест 3", () => {
    const num = 6;
    expect(reqFactorial(num)).toBe(720);
  });
});

describe("Кешированный факториал", () => {
  test("Тест 1", () => {
    const num = 4;
    expect(cachedFactorial(num)).toBe(24);
  });

  test("Тест 2", () => {
    const num = 5;
    expect(cachedFactorial(num)).toBe(120);
  });

  test("Тест 3", () => {
    const num = 6;
    expect(cachedFactorial(num)).toBe(720);
  });
});
