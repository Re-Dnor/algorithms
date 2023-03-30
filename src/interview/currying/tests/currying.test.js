import { curry } from "../currying.js";
// import { curry } from "../try-currying.js";

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

describe("Каррирование", () => {
  test("Обычный вызов функции", () => {
    const curriedJoin = curry(join);
    expect(curriedJoin(1, 2, 3)).toBe("1_2_3");
  });

  test("Каррирование первого аргумента", () => {
    const curriedJoin = curry(join);
    expect(curriedJoin(1, 2)(3)).toBe("1_2_3");
  });

  test("Каррирование всех агрументов", () => {
    const curriedJoin = curry(join);
    expect(curriedJoin(1)(2)(3)).toBe("1_2_3");
  });
});
