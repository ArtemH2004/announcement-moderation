export const adsFormatter = (count: number): string => {
  const modCount = count % 10;

  if (modCount >= 11 && modCount <= 14) {
    return "объявлений";
  }

  switch (modCount) {
    case 1:
      return "объявление";
    case 2:
    case 3:
    case 4:
      return "объявления";
    default:
      return "объявлений";
  }
};
