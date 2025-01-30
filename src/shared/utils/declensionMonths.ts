export const declensionMonths = (number: number) => {
  const lastDigit = number % 10;
  const lastTwoDigits = number % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${number} месяцев`;
  }
  if (lastDigit === 1) {
    return `${number} месяц`;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${number} месяца`;
  }
  return `${number} месяцев`;
};
