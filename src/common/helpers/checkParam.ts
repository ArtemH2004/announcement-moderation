export const checkParam = (
  key: string,
  value?: string | number | null
): string => {
  if (!!value) {
    return `${key}=${value}&`;
  }

  return "";
};
