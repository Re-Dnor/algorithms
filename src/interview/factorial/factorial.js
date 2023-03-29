export const factorial = (num) => {
  if (num <= 1) return 1;

  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
};

export const reqFactorial = (num) => {
  if (num <= 1) return 1;
  return num * reqFactorial(num - 1);
};

export const cachedFactorial = (num) => {
  if (num <= 1) return 1;

  if (!cachedFactorial[num]) {
    cachedFactorial[num] = num * cachedFactorial(num - 1);
  } else {
    return cachedFactorial[num];
  }
  return cachedFactorial[num];
};
