import { StatsEnum } from "@/common/enums/StatsEnum";

export const statsFormatter = (stats: StatsEnum): string => {
  switch (stats) {
    case StatsEnum.SUMMARY:
      return "Общая статистика";
    case StatsEnum.ACTIVITY:
      return "График активности";
    case StatsEnum.DECISIONS:
      return "График решений";
    case StatsEnum.CATEGORIES:
      return "График по категориям";
    default:
      return "Неизвестная статистика";
  }
};
