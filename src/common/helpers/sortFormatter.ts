import { SortEnum } from "@/common/enums/SortEnum";

export const sortFormatter = (
  sortBy: SortEnum,
  sortOrder: "asc" | "desc"
): string => {
  switch (sortBy) {
    case SortEnum.CREATED_AT:
      return "По дате";
    case SortEnum.PRIORITY:
      return "По приоритету";
    case SortEnum.PRICE:
      return sortOrder === "asc" ? "Дешевле" : "Дороже";
    case SortEnum.DEFAULT:
      return "По умолчанию";
    default:
      return "Неизвестная сортировка";
  }
};
