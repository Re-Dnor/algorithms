export const romanToInt = (str) => {
  const schema = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const next = str[i + 1];

    schema[current] < schema[next] ? (sum -= schema[current]) : (sum += schema[current]);
  }

  return sum;
};
